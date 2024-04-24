/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

describe('Cadastro de usuários', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
    })
    
    it('Deve fazer o cadastro com sucesso | usando faker e o comando customizado - preCadastro ', () => {
        var nome = faker.person.firstName()
        var email = faker.internet.email(nome)
        var senha = faker.internet.password()
        var msg = nome.toLowerCase()

        cy.preCadastro(nome, email, senha, msg), () => {
            cy.get('#customer_login > :nth-child(2)').should('contain','Email address') 
            cy.get('.woocommerce-password-strength').should('contain', 'Forte')
            cy.get(':nth-child(4) > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', msg)
            cy.screenshot()
        }
    })

    it('Deve fazer um novo cadastro | usando dados hardcoded e comandos customizados', () => {
        cy.novoCadastro('oliveira.qa@teste.com', 'qa12345678')
        cy.get('.woocommerce-error').should('contain', 'Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login')
        cy.screenshot          
    })
})
