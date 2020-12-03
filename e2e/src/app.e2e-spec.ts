import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display home page', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Colors:');
  });

  it('should display about button', async () => {
    await page.navigateTo();
    expect(await page.getAboutButtonText()).toBe("About");
  })

  it('should navigate to the about page', async () => {
    await page.navigateTo();
    await page.clickAboutButton();
    expect(await page.getAboutPageTitle()).toBe("Page made with Angular, by Isti");
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
