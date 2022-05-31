import UserPage from "../page_object/03.Userpage_module";
import HomePage from "../page_object/02.Homepage_module";
import common from "../page_object/Common_module";

describe('Search_User', () => {
    before(() => {
        cy.Read_Exceldata('User_Page.xlsx', 'Search_User', 'Search_User_data.json');
        cy.Login();
        HomePage.Navigate_to_UserPage()
        UserPage.Create_User(0, 'Create_User_data')
        cy.Signout()
    });
    beforeEach(() => {
        cy.Login()
        HomePage.Navigate_to_UserPage()
    })
    after(() => {
        UserPage.Search_User(5, 'Search_User_data')
        UserPage.Delete_User()
    })

    it('Searching user with all values', () => {
        UserPage.Search_User(0, 'Search_User_data')
        UserPage.Compare_UI('Search_User_data')
        UserPage.Reset_data()
    })
    it('Searching user with Name and Email', () => {
        UserPage.Search_User(1, 'Search_User_data')
        UserPage.Compare_UI('Search_User_data')
        UserPage.Reset_data()
    })
    it('Searching user with Phone, Status = "Worked" , Storage = "All"', () => {
        UserPage.Search_User(2, 'Search_User_data')
        UserPage.Compare_UI('Search_User_data')
        UserPage.Reset_data()
    })
    it('Search user with Name, Phone', () => {
        UserPage.Search_User(3, 'Search_User_data')
        UserPage.Compare_UI('Search_User_data')
        UserPage.Reset_data()
    })
    it('Search user with Email, Status = "Worked"', () => {
        UserPage.Search_User(4, 'Search_User_data')
        UserPage.Compare_UI('Search_User_data')
        UserPage.Reset_data()
    })
    it('Search user with Name, Storage = "None" & Storage user', () => {
        UserPage.Search_User(5, 'Search_User_data')
        UserPage.Compare_UI('Search_User_data')
        UserPage.Storage_User()
        UserPage.Reset_data()
    })
    it('Search user with Name, Storage = "Archived" & Unstorage user', () => {
        UserPage.Search_User(6, 'Search_User_data')
        UserPage.Compare_UI('Search_User_data')
        UserPage.Unstorage_User()
            // cy.wait(common.elements.Noti()).should('be.visible');
        UserPage.Reset_data()
    })
})

describe('Create_User', () => {
    beforeEach(() => {
        cy.Read_Exceldata('User_Page.xlsx', 'Create_User', 'Create_User_data.json');
        cy.Login();
        HomePage.Navigate_to_UserPage()
    });

    it('Create user with all valid values & status = "worked"', () => {
        UserPage.Create_User(0, 'Create_User_data')
        common.elements.Comebackbtn().eq(0).click()
        UserPage.Search_User(0, 'Create_User_data')
        UserPage.Compare_UI('Create_User_data')
        UserPage.Delete_User()
    })
    it('Create user with all valid values & status = "blocked"', () => {
        UserPage.Create_User(1, 'Create_User_data')
        common.elements.Comebackbtn().eq(0).click()
        UserPage.Search_User(1, 'Create_User_data')
        UserPage.Compare_UI('Create_User_data')
        UserPage.Delete_User()
    })
    it.only('Create user with all feilds be blanked', () => {
        UserPage.Create_User(2, 'Create_User_data')
        common.elements.ErrorMs().should('have.length', 6)

    })
    it('Create user with the name be blanked', () => {
        UserPage.Create_User(3, 'Create_User_data')
        UserPage.Search_User(3, 'Create_User_data')
    })
    it('Create user with the username contain special characters', () => {
        UserPage.Create_User(4, 'Create_User_data')
        UserPage.Search_User(4, 'Create_User_data')
    })
    it('Create user with the username less than 5 characters', () => {
        UserPage.Create_User(5, 'Create_User_data')
        UserPage.Search_User(5, 'Create_User_data')
    })
    it('Create user with the username be blanked', () => {
        UserPage.Create_User(6, 'Create_User_data')
        UserPage.Search_User(6, 'Create_User_data')
    })
    it('Create user with the invalid email', () => {
        UserPage.Create_User(7, 'Create_User_data')
        UserPage.Search_User(7, 'Create_User_data')
    })
    it('Create user with the email be blanked', () => {
        UserPage.Create_User(8, 'Create_User_data')
        UserPage.Search_User(8, 'Create_User_data')
    })
    it('Create user with the invalid phone', () => {
        UserPage.Create_User(9, 'Create_User_data')
        UserPage.Search_User(9, 'Create_User_data')
    })
    it('Create user with the the phone be blanked', () => {
        UserPage.Create_User(10, 'Create_User_data')
        UserPage.Search_User(10, 'Create_User_data')
    })
    it('Create user with the password less than 6 characters', () => {
        UserPage.Create_User(11, 'Create_User_data')
        UserPage.Search_User(11, 'Create_User_data')
    })
    it('Create user with the password be blanked', () => {
        UserPage.Create_User(12, 'Create_User_data')
        UserPage.Search_User(12, 'Create_User_data')
    })
    it('Create user witrh the password & repassword be not the same', () => {
        UserPage.Create_User(13, 'Create_User_data')
        UserPage.Search_User(13, 'Create_User_data')
    })

})