import { HomePage } from './HomePage';
import { Browser } from '../lib';
import { SearchResults } from './SearchResultsPage';

export {

  HomePage,
};

export class AllPages {

  public home: HomePage;
  public searchPage: SearchResults;

  constructor(public browser: Browser) {
    this.home = new HomePage(browser);
    this.searchPage = new SearchResults(browser);
  }

  public async dispose(): Promise<void> {
    await this.browser.close();
  }
}
