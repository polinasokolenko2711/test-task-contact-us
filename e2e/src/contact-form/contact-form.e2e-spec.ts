import { ContactForm, } from './contact-form.po';

describe('Form tests', () => {
    let page: ContactForm;
    beforeEach(() => {
        page = new ContactForm();
        page.navigateTo();
    });

    it('Name field should be invalid', () => {
        page.getEmail().sendKeys('');
        const email = page.getName().getAttribute('class');
        expect(email).toContain('ng-invalid');
    });

    it('Email field should be invalid', () => {
        page.getEmail().sendKeys('email');
        const email = page.getName().getAttribute('class');
        expect(email).toContain('ng-invalid');
    });

    it('Contact form should be valid', () => {
        page.getName().sendKeys('Test');
        page.getEmail().sendKeys('email@test.com');
        page.getCompanyName().sendKeys('Test Company');
        page.getSiteName().sendKeys('Site name');

        const name = page.getName().getAttribute('class');
        const email = page.getEmail().getAttribute('class');
        const companyName = page.getCompanyName().getAttribute('class');
        const siteName = page.getSiteName().getAttribute('class');

        expect(name).toContain('ng-valid');
        expect(email).toContain('ng-valid');
        expect(companyName).toContain('ng-valid');
        expect(siteName).toContain('ng-valid');
       });

    it('Form should be empty after sent', () => {
        page.getName().sendKeys('Test');
        page.getEmail().sendKeys('email@test.com');
        page.getCompanyName().sendKeys('Test Company');
        page.getSiteName().sendKeys('Site name');

        page.getForm().submit();
        const name = page.getName();
        expect(name.getAttribute('value')).toBe('');
    });

});
