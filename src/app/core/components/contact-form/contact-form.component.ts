import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { ApiService } from 'src/app/shared/services/api.service';
import { ContactForm } from 'src/app/shared/models/contact-form';

const recipient = {
  To: 'admin@email.com',
  Subject: 'Enterprise plans',
};

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  form: FormGroup;

  get controls() {
    return this.form.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      companyName: ['', [Validators.required]],
      country: [''],
      siteName: ['', [Validators.required]],
      siteUrl: [''],
    });
  }

  submit() {
    const value  = this.formatRequest();
    this.apiService.postContactUs(value).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(_ => {
      this.toastr.success('Thank you, we will contact you', 'Success');
      this.form.reset();
    }, _ => {
      this.toastr.error('Something went wrong', 'Error');
    });
  }

  private formatRequest(): ContactForm {
    const formValue = this.form.getRawValue();
    return {
      ...recipient,
      Body: Object.values(formValue).join('\n'),
    };
  }
}
