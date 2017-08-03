import { RenownedsheetsPage } from './app.po';

describe('renownedsheets App', () => {
  let page: RenownedsheetsPage;

  beforeEach(() => {
    page = new RenownedsheetsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
