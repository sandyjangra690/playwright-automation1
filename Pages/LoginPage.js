class LoginPage {

    constructor(page) {
        this.page = page;
        //this.loginLink = page.locator('#login2');
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
        this.errorMessage = page.locator('div[id="flash"]');
        this.baseURL = 'https://practice.expandtesting.com';
        this.LoginSuccessMessage = page.locator('//div[@id = "flash-message"]//div[1]//b');
    }

    async navigateToLoginPage() {
        await this.page.goto(`${this.baseURL}/login`);
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click(); 
        await this.page.waitForLoadState('networkidle'); // Wait for the page to load after login
        await this.page.waitForTimeout(5000); // Additional wait for debugging purposes
        await this.LoginSuccessMessage.textContent(); // Ensure the success message is captured 
    }

}

module.exports = { LoginPage };
