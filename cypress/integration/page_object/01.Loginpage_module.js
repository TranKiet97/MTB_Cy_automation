class LoginPage {
    elements = {
        UsernameInput: () => cy.get('[name="username"]'),
        PasswordInput: () => cy.get('[name="password"]'),
        LoginBtn: () => cy.get('[class="euiButton__text"]').should('have.text', 'Đăng nhập'),
        Noti: () => cy.get('[class="euiText euiText--small euiToastBody"]'),
    }
    TypeUsername(username) {
        this.elements.UsernameInput().type(username);
    }
    TypePassword(password) {
        this.elements.PasswordInput().type(password);
    }
    ClickLogin() {
        this.elements.LoginBtn().click();
    }
}
module.exports = new LoginPage();