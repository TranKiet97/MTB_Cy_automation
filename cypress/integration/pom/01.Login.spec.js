import LoginPage from '../page_object/01.Loginpage_module'
import HomePage from '../page_object/02.Homepage_module'
import common from '../page_object/Common_module'

describe('Login', () => {
    beforeEach(() => {
        cy.Read_Exceldata('Login_Page.xlsx', 'Login', 'Login_data.json');
        cy.Visit_to_Website()
    });
    it('Login with valid value', () => {
        cy.fixture('Login_data').then((data) => {
            LoginPage.TypeUsername(data.rows[0].username);
            LoginPage.TypePassword(data.rows[0].password)
        });
        LoginPage.ClickLogin();
        HomePage.elements.Title().should('have.text', 'Dashboard')
    });
    it('Login with the username be blanked', () => {
        cy.fixture('Login_data').then((data) => {
            LoginPage.TypePassword(data.rows[1].password)
        });
        LoginPage.ClickLogin();
        common.elements.ErrorMs().should('be.visible')
    });
    it('Login with the password be blanked', () => {
        cy.fixture('Login_data').then((data) => {
            LoginPage.TypeUsername(data.rows[2].username)
        });
        LoginPage.ClickLogin();
        common.elements.ErrorMs().should('be.visible')
    });
    it('Login with the username and the password be blanked', () => {
        LoginPage.ClickLogin();
        common.elements.ErrorMs().should('be.visible')
    });
    it('Login with invalid username', () => {
        cy.fixture('Login_data').then((data) => {
            LoginPage.TypeUsername(data.rows[3].username);
            LoginPage.TypePassword(data.rows[3].password)
        });
        LoginPage.ClickLogin();
        common.elements.Noti().should('be.visible')
    });
    it('Login with invalid password', () => {
        cy.fixture('Login_data').then((data) => {
            LoginPage.TypeUsername(data.rows[4].username);
            LoginPage.TypePassword(data.rows[4].password)
        });
        LoginPage.ClickLogin();
        common.elements.Noti().should('be.visible')
    });
});