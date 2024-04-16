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

describe('Registro na Ebac-Shop', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')        
    });
    afterEach(() => {
        cy.screenshot()
    });

    it.only('deve poder registrar novo usuário na plataforma', () => {
        cy.get(':nth-child(2) > h2').should('contain', 'Register')
        cy.get('#reg_email').type('nebulosa@teste.com.br')
        cy.get('#reg_password').type('Qa12345678')
        cy.get(':nth-child(4) > .button').click()
        cy.contains('nebulosa !').should('exist')             
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').click()
        cy.get('.vc_custom_1503911295487').should('contain', 'PRODUTOS SUGERIDOS')  
    })
})