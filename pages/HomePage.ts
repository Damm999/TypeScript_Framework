import { WebComponent, Browser, Page, findBy, Button, TextInput, elementIsVisible, pageHasLoaded } from '../lib';
import config from '../config';

export class HomePage extends Page {
  constructor(browser: Browser) {
    super(browser);
    this.setUrl(`${config.baseUrl}/`);
  }

  @findBy('[class="login"]')
  private signInButton;

  @findBy('##email_create')
  private emailAddressTextBox;

  @findBy('#SubmitCreate')
  private createAccountButton;

  @findBy('#search_query_top')
  public searchTextBox;

  @findBy('[name="submit_search"]')
  public goButton;

  public loadCondition() {
    return elementIsVisible(() => this.signInButton);
  }


  public async clickOnSignIn(): Promise<void> {
    await this.signInButton.click();
  }

  public async enterEmailAddress(email:string): Promise<void> {
    await this.emailAddressTextBox.sendKeys(email);
  }

  public async clickCreateAccountButton(): Promise<void> {
    await this.createAccountButton.click();
  }

  public async enterSearchParameter(text:string):Promise<void> {
    await this.searchTextBox.sendKeys(text)
    await this.goButton.click();
  }

  
}
