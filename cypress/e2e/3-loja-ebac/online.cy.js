/// <reference  types="cypress" /> 

describe('Ebac-shop deve estar online', () => {
   beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
   });   

   afterEach(() => {
    cy.screenshot()
   });

    it('acessando a pagina de login', () => {
        cy.get('#tbay-topbar').should('contain', 'Sign up')
    })  
})
