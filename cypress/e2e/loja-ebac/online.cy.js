/// <reference  types="cypress" /> 

describe('Ebac-shop deve estar online', () => {
   beforeEach(() => {
    cy.visit('minha-conta')
   });   

    it('acessando a pagina de login', () => {
        cy.get('#tbay-topbar').should('contain', 'Sign up')
    })  
})
