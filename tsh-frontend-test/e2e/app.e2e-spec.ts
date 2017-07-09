import { TshFrontendTestPage } from './app.po';

describe('tsh-frontend-test App', () => {
  let page: TshFrontendTestPage;

  beforeEach(() => {
    page = new TshFrontendTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
