import { Builder, ThenableWebDriver, WebElement, By, WebElementPromise, until } from 'selenium-webdriver';
import { AllPages } from '../../pages';
import { Browser, ensure } from '../../lib';

describe('Automation Practice Automation', () => {
  let pages: AllPages;

  before(async () => {
    pages = new AllPages(new Browser('chrome'));
  });

  it('Test Case #1: Navigate to Automationpractice website.', async () => {
    // Action
    await pages.home.navigate();
    await (await pages.home.clickOnSignIn());
    await pages.home.enterEmailAddress("test0877@gmail.com");

    // Assert
    await Promise.all([
      ensure(pages.home.searchTextBox).isNotVisible()
    ]);

   
    await pages.home.clickCreateAccountButton();

  });

  it('Test Case #2: Search a paramter.', async () => {
    // Action
    await pages.home.navigate();
    await pages.home.enterSearchParameter("dress");

    // Assert
    await ensure(pages.searchPage.searchDiv).isVisible();
    
  });

  after(async () => {
    await pages.dispose();
  });
});
