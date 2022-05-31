import HomePage from '../page_object/02.Homepage_module'

describe('Navigation to another Page', () => {
    beforeEach(function() {
        cy.Login();
    });
    afterEach(function() {
        HomePage.elements.Dashboard().click();
        cy.Signout()
    });

    it('Navigate to Userpage', () => {
        HomePage.Navigate_to_UserPage()
    });

    it('Navigate to Classpage', () => {
        HomePage.Navigate_to_Classpage()
    });

    it('Navigate to Subjectpage', () => {
        HomePage.Navigate_to_Subjectpage()
    });

    it('Navigate to Locationpage ', () => {
        HomePage.Navigate_to_Locationpage()
    });

    it('Navigate to Departmentpage', () => {
        HomePage.Navigate_to_Departmentpage()
    });

    it('Navigate to Schoolhourpage ', () => {
        HomePage.Navigate_to_Schoolhourpage()
    });

    it('Navigate to Employeepage', () => {
        HomePage.Navigate_to_Employeepage()
    });

    it('Navigate to Teacherrolepage ', () => {
        HomePage.Navigate_to_Teacherrolepage()
    });

    it('Navigate to Classnumberpage ', () => {
        HomePage.Navigate_to_Classnumberpage()
    });

    it('Navigate to Teacherpage', () => {
        HomePage.Navigate_to_Teacherpage()
    });

    it('Navigate to Rolepage', () => {
        HomePage.Navigate_to_Rolepage()
    });

    it('Navigate to Permissionpage', () => {
        HomePage.Navigate_to_Permissionpage()
    })
})