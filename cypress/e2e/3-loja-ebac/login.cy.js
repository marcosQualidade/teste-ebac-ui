/// <reference types="cypress" />

describe('Verifica se o ecommerce Ebac-Shop está online', () => {
    it('Visualza a tela de login', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#customer_login > :nth-child(1)').should('contain', 'Username or email address *')
    })  
    
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('gaviao.arqueiro@teste.com.br')
        cy.get('#password').type('Qa12345678')
        cy.get('.woocommerce-form > .button').click()

        cy.get('a > .hidden-xs').should('contain', 'Welcome gaviao.arqueiro !')
    }) 


})