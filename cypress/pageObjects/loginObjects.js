class AuthLogin{
    get email() {
        return cy.get('[type="text"]')
    }
    get password() {
        return cy.get('.form-control.mt-3')
    }
    get submit() {
        return cy.get('.btn')
    }
    login(email,password){
        this.email.type("mejac91@hotmail.com")
        this.password.type("detelinara1991")
        this.submit.click()
    }
}
export const authLogin = new AuthLogin ()