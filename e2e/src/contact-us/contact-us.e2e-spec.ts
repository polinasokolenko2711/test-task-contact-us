import { ContactUs } from './contact-us.po';

describe('Contact us tests', () => {
    let page: ContactUs;
    beforeEach(() => {
        page = new ContactUs();
        page.navigateTo();
    });

    it('h1 is show', () => {
        expect(page.getHeader().getText()).toBe('Enterprise plans');
    });

    it('Subtitle is show', () => {
        expect(page.getSubHeader().getText()).toBe('Feel out of these details to get started with our enterprise plans.');
    });
});
