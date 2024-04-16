/// <reference types="cypress" />

describe('Verifica se o ecommerce Ebac-Shop está online', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    afterEach(() => {
        cy.screenshot()
    });
    
    it('Visualiza a tela de login', () => {
        cy.get('#customer_login > :nth-child(1)').should('contain', 'Username or email address *')
    })  
    
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('gaviao.arqueiro@teste.com.br')
        cy.get('#password').type('Qa12345678')
        cy.get('.woocommerce-form > .button').click()
        cy.get('a > .hidden-xs').should('contain', 'Welcome gaviao.arqueiro !')
    })
    
    it('Deve visualizar mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('gaviao.arqueiro@teste.com')
        cy.get('#password').type('Qa12345678')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')
    })

    it.only('Deve visualizar mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('gaviao.arqueiro@teste.com.br')
        cy.get('#password').type('Qa0000000')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail gaviao.arqueiro@teste.com.br está incorreta.')
    })

})