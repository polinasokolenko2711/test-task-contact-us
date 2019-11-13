import { browser, by, element } from 'protractor';


export class ContactUs {

    navigateTo() {
        return browser.get('/contact');
    }

    getHeader() {
        return element(by.css('.header h1'));
    }

    getSubHeader() {
        return element(by.css('.header p'));
    }

}
