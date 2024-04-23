/// <reference types="cypress"/>

const perfil = require('../../fixtures/perfil.json');

describe('Funcionalidade: Detalhe da conta', () => {
    beforeEach(() => {
        cy.visit('minha-conta/edit-account/')
        cy.login(perfil.userName, perfil.password)
    })

    it.only('Deve alterar os detalhes da conta com sucesso', () => {
        cy.detalheConta('Marcos', 'Oliveira', 'oliveira-Editado')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, oliveira-Editado (não é oliveira-Editado? Sair)')
    })
})