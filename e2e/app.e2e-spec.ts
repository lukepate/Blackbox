import { BlackBoxPage } from './app.po';

describe('black-box App', function() {
  let page: BlackBoxPage;

  beforeEach(() => {
    page = new BlackBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
