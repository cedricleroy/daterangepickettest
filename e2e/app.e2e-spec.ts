import { DaterangepickertestPage } from './app.po';

describe('daterangepickertest App', function() {
  let page: DaterangepickertestPage;

  beforeEach(() => {
    page = new DaterangepickertestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
