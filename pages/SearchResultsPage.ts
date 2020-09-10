import { WebComponent, Browser, Page, findBy, Button, TextInput, elementIsVisible, pageHasLoaded, WaitCondition } from '../lib';
import config from '../config';

export class SearchResults extends Page {
 
  constructor(browser: Browser) {
    super(browser);
  }

  @findBy('[class="breadcrumb clearfix"]')
  public searchDiv;

  
  public loadCondition(): WaitCondition {
    return elementIsVisible(() => this.searchDiv);
  }

  
}
