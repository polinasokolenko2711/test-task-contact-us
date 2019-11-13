import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/services/api.service';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormComponent ],
      imports: [
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        HttpClientModule,
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('name field validator works', () => {
      const name = component.form.controls['name'];
      expect(name.valid).toBeFalsy();
      name.setValue('');
      const errors = name.errors || {};
      expect(errors['required']).toBeTruthy();
  });

  it('email field validator works', () => {
    const name = component.form.controls['email'];
    expect(name.valid).toBeFalsy();
    name.setValue('incorrectemail');
    const errors = name.errors || {};
    expect(errors['email']).toBeTruthy();
  });

  it('form is valid', () => {
    component.form.controls['name'].setValue('test');
    component.form.controls['email'].setValue('test@email.com');
    component.form.controls['companyName'].setValue('Name');
    component.form.controls['siteName'].setValue('Site Name');
    expect(component.form.valid).toBeTruthy();
  });

});
