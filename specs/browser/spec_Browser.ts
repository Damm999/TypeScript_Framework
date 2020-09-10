import { describe } from 'mocha';
import { buildSchema, graphql } from 'graphql'
import { Builder, By } from 'selenium-webdriver';
import { specification, action, when, then } from '../../lib/mocha-bdd';
import { AllPages } from '../../pages';
import { Browser } from '../../lib/browser';
import { ensure } from '../../lib/ensure';

specification('Automation Practice Automation', () => {
  let pages: AllPages;
  action(async () => {
    pages = new AllPages(new Browser('chrome'));
    await pages.home.navigate();
  });

  when('Home Page is opened.', async () => {
    then('it should click on ', async () => {
      await (await pages.home.clickOnSignIn());
    });

    when('Sign In Page is opened', async () => {
        await(await pages.home.enterEmailAddress("test0877@gmail.com"));

      then('it should click on createAccount Button', async () => {
        await ensure(pages.home.searchTextBox).isNotVisible();
        await pages.home.clickCreateAccountButton();
      });
    });
  });

  after(async () => {
    await pages.dispose();
  });
});
