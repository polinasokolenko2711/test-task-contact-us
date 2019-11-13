import { browser, by, element } from 'protractor';


export class ContactForm {
    navigateTo() {
        return browser.get('/contact');
    }

    getForm() {
        return element(by.css('form'));
    }

    getName() {
        return element(by.css('input[formControlName=name]'));
    }

    getEmail() {
        return element(by.css('input[formControlName=email]'));
    }

    getCompanyName() {
        return element(by.css('input[formControlName=companyName]'));
    }

    getSiteName() {
        return element(by.css('input[formControlName=siteName]'));
    }

    getSiteUrl() {
        return element(by.css('input[formControlName=siteUrl]'));
    }

}
