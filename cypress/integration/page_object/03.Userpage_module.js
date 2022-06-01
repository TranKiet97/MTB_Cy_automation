import common from "../page_object/Common_module";
class UserPage {
    elements = {
        Status: () => cy.get('[name="status"]'),
        Storage: () => cy.get('[name="isArchived"]'),

    };
    Set_Condition_Search(Name, Email, Phone, Status, Storage) {
        if (Name != "N") { common.elements.Name().type(Name) } else { common.elements.Name().should('have.text', '') };
        if (Email != "N") { common.elements.Email().type(Email) } else { common.elements.Email().should('have.text', '') };
        common.elements.Otherfiltersbtn().eq(1).click();
        if (Phone != "N") { common.elements.Phone().type(Phone) } else { common.elements.Phone().should('have.text', '') };
        if (Status == "N") { this.elements.Status().select(0) } else if (Status == "W") { this.elements.Status().select(1) } else { cy.get('[name="status"]').select(2) };
        if (Storage == "N") { this.elements.Storage().select(0) } else if (Storage == "Archived") { this.elements.Storage().select(1) } else { this.elements.Storage().select(2) }
    };
    Search_User(index, Jsonfile) {
        cy.fixture(Jsonfile).then((data) => {
            this.Set_Condition_Search(
                data.rows[index].name,
                data.rows[index].email,
                data.rows[index].phone,
                data.rows[index].status,
                data.rows[index].storage
            );
        });
        common.elements.Searchbtn().eq(7).click();
        cy.screenshot()
    }
    Get_Value_In_Table(Name, Email, Phone) {
        common.elements.Table().get('tr')
            .each(() => {
                cy.get('tr td:nth-child(2)').contains(Name);
                cy.get('tr td:nth-child(4)').contains(Email);
                cy.get('tr td:nth-child(5)').contains(Phone)
            })
    }
    Compare_UI(Jsonfile) {
        cy.fixture(Jsonfile).then((data) => {
            this.Get_Value_In_Table(
                data.rows[0].name,
                data.rows[0].email,
                data.rows[0].phone
            )
        })
    }
    Storage_User() {
        common.elements.Checkbox().eq(2).click();
        common.elements.Storeline().eq(6).click();
        cy.get('[class="euiGlobalToastList euiGlobalToastList--right"]').should('be.visible')
    }
    Unstorage_User() {
        common.elements.Checkbox().eq(2).click();
        common.elements.Storeline().eq(7).click();
        cy.get('[class="euiGlobalToastList euiGlobalToastList--right"]').should('be.visible')
    }
    Reset_data() {
        common.elements.Resetbtn().eq(3).click()
    }
    Set_Condition_Create(Name, Username, Email, Phone, Type, Role, Status, Password, Repassword) {
        common.elements.Newbtn().eq(0).click();
        if (Name == "N") { cy.log('Name be blanked') } else { common.elements.Name().type(Name) };
        if (Username != "N") { common.elements.Username().type(Username) } else { cy.log('Username be blanked') };
        if (Email != "N") { common.elements.Email().type(Email) } else { cy.log('Email be blanked') };
        if (Phone != "N") { common.elements.Phone().type(Phone) } else { cy.log('Phone be blanked') };
        common.elements.Type().select(Type);
        common.elements.Role().select(Role);
        if (Status == "W") { this.elements.Status().select(0) } else { this.elements.Status().select(1) };
        if (Password == "N") { cy.log('Password bị để trống') } else { common.elements.Password().type(Password) };
        if (Repassword != "N") { common.elements.Repassword().type(Repassword) } else { cy.log('Repassword bị để trống') };
    }
    Create_User(index, Jsonfile) {
        cy.fixture(Jsonfile).then((data) => {
            this.Set_Condition_Create(
                data.rows[index].name,
                data.rows[index].username,
                data.rows[index].email,
                data.rows[index].phone,
                data.rows[index].type,
                data.rows[index].role,
                data.rows[index].status,
                data.rows[index].password,
                data.rows[index].repassword
            )
        })
        common.elements.Savebtn().eq(1).click();
    }
    Delete_User() {
        common.elements.Checkbox().eq(2).click();
        common.elements.Deletebtn().eq(5).click()
        cy.get('[class="euiTableRow"]').should('have.text', 'No items found')
        common.elements.Noti().should('be.visible');
    }
    Check_Error(num, mess) {
        common.elements.ErrorMs()
            .should('have.length', num)
            .each(($item, index, $list) => {
                return 'status'
            })
            .then(($list) => {
                expect($list).to.contain(mess)
            })
        cy.log('có ' + num + ' trường không hợp lệ')
    }
}
module.exports = new UserPage();