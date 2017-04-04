import { AdventureStoryPage } from './app.po';

describe('adventure-story App', function() {
  let page: AdventureStoryPage;

  beforeEach(() => {
    page = new AdventureStoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
