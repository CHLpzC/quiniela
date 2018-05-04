import { QuinielaDeskPage } from './app.po';

describe('quiniela-desk App', () => {
  let page: QuinielaDeskPage;

  beforeEach(() => {
    page = new QuinielaDeskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
