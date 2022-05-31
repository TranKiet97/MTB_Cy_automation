class HomePage {
    elements = {
        Title: () => cy.get('[title="Dashboard"]'),
        Dashboard: () => cy.get('[href="/"]'),
        Manage: () => cy.get('h3').eq(0),
        General: () => cy.get('h3').eq(1),
        User: () => cy.get('[href="/users"]'),
        Class: () => cy.get('[href="/rooms"]'),
        Subject: () => cy.get('[href="/subjects"]'),
        Location: () => cy.get('[href="/locations"]'),
        Department: () => cy.get('[href="/departments"]'),
        Schoolhour: () => cy.get('[href="/school-hours"]'),
        Employee: () => cy.get('[href="/employees"]'),
        Teacherrole: () => cy.get('[href="/teacher-roles"]'),
        Classnumber: () => cy.get('[href="/class-numbers"]'),
        Teacher: () => cy.get('[href="/teachers"]'),
        Role: () => cy.get('[href="/roles"]'),
        Permission: () => cy.get('[href="/permissions"]'),
        Option: () => cy.get('[class="euiTitle euiTitle--large"]')
    }
    Navigate_to_UserPage() {
        this.elements.Manage().click();
        this.elements.User().click();
        this.elements.Option().should('have.text', 'Quản lý người dùng');
    }
    Navigate_to_Classpage() {
        this.elements.Manage().click();
        this.elements.Class().click();
        this.elements.Option().should('have.text', 'Quản lý lớp học');
    }
    Navigate_to_Subjectpage() {
        this.elements.Manage().click();
        this.elements.Subject().click();
        this.elements.Option().should('have.text', 'Quản lý môn học');
    }
    Navigate_to_Locationpage() {
        this.elements.Manage().click();
        this.elements.Location().click();
        this.elements.Option().should('have.text', 'Quản lý địa điểm lớp học');
    }
    Navigate_to_Departmentpage() {
        this.elements.Manage().click();
        this.elements.Department().click();
        this.elements.Option().should('have.text', 'Quản lý phòng ban');
    }
    Navigate_to_Schoolhourpage() {
        this.elements.Manage().click();
        this.elements.Schoolhour().click();
        this.elements.Option().should('have.text', 'Quản lý ca học');
    }
    Navigate_to_Employeepage() {
        this.elements.Manage().click();
        this.elements.Employee().click();
        this.elements.Option().should('have.text', 'Quản lý nhân viên');
    }
    Navigate_to_Teacherrolepage() {
        this.elements.Manage().click();
        this.elements.Teacherrole().click();
        this.elements.Option().should('have.text', 'Phân môn giảng dạy');
    }
    Navigate_to_Classnumberpage() {
        this.elements.Manage().click();
        this.elements.Classnumber().click();
        this.elements.Option().should('have.text', 'Quản lý sĩ số tối đa');
    }
    Navigate_to_Teacherpage() {
        this.elements.Manage().click();
        this.elements.Teacher().click();
        this.elements.Option().should('have.text', 'Quản lý giáo viên');
    }
    Navigate_to_Rolepage() {
        this.elements.General().click();
        this.elements.Role().click();
        this.elements.Option().should('have.text', 'Quản lý vai trò');
    }
    Navigate_to_Permissionpage() {
        this.elements.General().click();
        this.elements.Permission().click();
        this.elements.Option().should('have.text', 'Quản lý quyền hạn');
    }
}
module.exports = new HomePage();