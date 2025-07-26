class HomePage{

constructor(page) {

    this.page = page;
    this.footerExpandTestingLink = page.locator('//p[@id="version"]//a');
    
}

async navigateToHomePage() {
        await this.page.goto(`${this.baseURL}`);
    }


async clickFooterLinkAndGetNewTab(context) {
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      this.footerExpandTestingLink.click(),
    ]);
    await newPage.waitForLoadState('load');
    return newPage;
}

}

export default { HomePage };