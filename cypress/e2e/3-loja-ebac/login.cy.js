/// <reference types="cypress" />

const perfil = require('../../fixtures/perfil.json')

describe('Verifica se o ecommerce Ebac-Shop está online', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Visualiza a tela de login', () => {
        cy.get('#customer_login > :nth-child(1)').should('contain', 'Username or email address *')
    })  
    
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type(perfil.userName, {log:false}) // log:false esconde os dados que podem ser sensíveis a LGPD
        cy.get('#password').type(perfil.password, {log:false}) // log:false esconde os dados que podem ser sensíveis a LGPD
        cy.get('.woocommerce-form > .button').click()
        cy.get('a > .hidden-xs').should('contain', 'Welcome gaviao.arqueiro !')
    })

    
    it('Deve fazer login com sucesso - Usando Fixture', () => { // usando o método fixture() | nativo do cypress
        cy.fixture('perfil').then(dados => { // .then() metodo é necessário devido cypress ser assincrono e carregar tudo ao mesmo tempo
            cy.get('#username').type(dados.userName) // nome dados criado aleatóriamente , porém, faz sentido no contexto do teste
            cy.get('#password').type(dados.password)
            cy.get('.woocommerce-form > .button').click()
            cy.get('a > .hidden-xs').should('contain', 'Welcome gaviao.arqueiro !')
        })
    }) 
    
    it('Deve visualizar mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('gaviao.arqueiro@teste.com')
        cy.get('#password').type('Qa12345678')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')
    })

    it('Deve visualizar mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('gaviao.arqueiro@teste.com.br')
        cy.get('#password').type('Qa0000000')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail gaviao.arqueiro@teste.com.br está incorreta.')
    })

})