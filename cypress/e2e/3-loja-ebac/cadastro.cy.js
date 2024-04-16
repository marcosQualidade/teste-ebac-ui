/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

describe('Cadastro de usuários', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer o cadastro com sucesso', () => {
        var nome = faker.person.firstName()
        var email = faker.internet.email(nome)
        var senha = faker.internet.password()
        var msg = nome.toLowerCase()
        
        cy.get('#customer_login > :nth-child(2)').should('contain','Email address') 
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.get('.woocommerce-password-strength').should('contain', 'Forte')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', msg)
    })
})