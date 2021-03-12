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
        cy.get(data.login.profesorButton).click()
        cy.get(data.login.createProfesor).click()
    })

    it("Create Profesor", () => {
        cy.get('#firstName').type("aleksa")
        cy.get('#lastName').type("roki")
        cy.get(".mb-2 > .btn").click()
        cy.get(".form-control").type('https://citymagazine.rs/wp-content/uploads/2019/09/cover-divlje-zivotinje.jpg')
        cy.get('[name="submit"]').click()
         cy.wait(5000)

    })
    it("Profesor check response", () => {
         cy.get(".form-control").type("aleksa")
    })

    it('literate trough kuce',() => {
        cy.get('.container').each((element) => {
            expect(element.text()).to.include('aleksa')
        })

    })


    })