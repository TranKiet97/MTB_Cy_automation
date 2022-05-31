class common {
    elements = {
        PageTitle: () => cy.get('[class="euiTitle euiTitle--large"]'),
        Newbtn: () => cy.get('[class="euiButton__text"]'),
        Favoritebtn: () => cy.get('[class="euiButton__text"]').should('have.text', 'Yêu thích'),
        Resetbtn: () => cy.get('[class="euiButton__text"]'),
        Searchbtn: () => cy.get('[class="euiButton__text"]'),
        Storeline: () => cy.get('[class="euiButton__text"]'),
        Unstoreline: () => cy.get('[class="euiButton__text"]'),
        Otherfiltersbtn: () => cy.get('[class="euiButton__text"]'),
        Closebtn: () => cy.get('[class="euiButton__text"]').should('have.text', 'Đóng'),
        Comebackbtn: () => cy.get('[class="euiButton__text"]'),
        Savebtn: () => cy.get('[class="euiButton__text"]'),
        Editbtn: () => cy.get('[title="Cập nhật"]'),
        Deletebtn: () => cy.get('[class="euiButton__text"]'),
        Savecurrentsearchbtn: () => cy.get('[class="euiContextMenuItem__text"]'),
        Checkbox: () => cy.get('[type="checkbox"]'),
        Name: () => cy.get('[name="name"]'),
        Username: () => cy.get('[name="username"]'),
        Code: () => cy.get('[name="code"]'),
        Email: () => cy.get('[name="email"]'),
        Phone: () => cy.get('[name="phone"]'),
        Teacher: () => cy.get('[name="employeeId"]'),
        Table: () => cy.get('[class="euiBasicTable"]'),
        Type: () => cy.get('[name="type"]'),
        Role: () => cy.get('[name="roleId"]'),
        Password: () => cy.get('[name="password"]'),
        Repassword: () => cy.get('[name="repassword"]'),
        Noti: () => cy.get('[class="euiGlobalToastList euiGlobalToastList--right"]'),
        ErrorMs: () => cy.get('[class="euiFormErrorText euiFormRow__text"]')
    }
}
module.exports = new common();