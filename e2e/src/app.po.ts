import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root app-cars h3')).getText();
  }

  async getAboutButtonText(): Promise<string> {
    // return element(by.css('app-root .navbar a'));
    return element.all(by.css('app-root .navbar a')).last().getText();
  }

  async clickAboutButton(): Promise<void> {
    return element.all(by.css('app-root .navbar a')).last().click();
  }

  async getAboutPageTitle(): Promise<string> {
    return element(by.css("app-about h1")).getText();
  }
}
