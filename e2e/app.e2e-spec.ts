import { NewperformanceSpePage } from './app.po';

describe('newperformance-spe App', function() {
  let page: NewperformanceSpePage;

  beforeEach(() => {
    page = new NewperformanceSpePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
