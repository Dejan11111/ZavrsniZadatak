import {authLogin} from '../pageObjects/loginObjects.js'
const data = require("../fixtures/data.json")
describe("Login test", () => {
    it ('Visit gallery page', () => {
        cy.visit('https://gradebook.vivifyideas.com/login')
        //cy.wait(5000)
       
    })
    it("Login using POM",() =>{
        authLogin.login(data.login.email,data.login.password)
        cy.get(data.login.submit).click()
        
    })

    it("Gradebook Create", () => {
        cy.get('[href="/create-gradebook"]').click()
        cy.get('#title').type("Roki")
        cy.get('select[name="professor"]').select("nikola222311 Tesla")
        cy.get('.btn').click()
    })

    // it('literate trough kuce',() => {
    //     cy.get('.container').each((element) => {
    //         expect(element.text()).to.include('aleksa')
    //     })



    })
