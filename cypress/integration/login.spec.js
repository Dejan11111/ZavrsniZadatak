import {authLogin} from '../pageObjects/loginObjects.js'
const data = require("../fixtures/data.json")
describe("Login test", () => {
    it ('Visit gallery page', () => {
        cy.visit('https://gradebook.vivifyideas.com/login')
        //cy.wait(5000)
       
    })
    // it("login", () => {
    //     cy.get('[type="text"]').type("mejac91@hotmail.com")
    //     cy.get('.form-control.mt-3').type("detelinara1991")
    //     cy.get(".btn").click()
       
        
        
    // })

    it("Login using POM",() =>{
        authLogin.login(data.login.email,data.login.password)
        cy.get('button').click()
    })
})
