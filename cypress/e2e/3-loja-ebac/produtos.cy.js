/// <reference types="cypress" />

describe('FUncionalidade: Produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
       })
    
    var passou = 'Descrição'   
    
    it('Deve selecionar o primeiro produto da lista', () => {
        cy.get('.product-block').first().click()
        cy.get('#tab-title-description > a').should('contain', passou)
    })

    it('Deve selecionar o útimo produto da lista', () => {
        cy.get('.product-block').last().click()
        cy.get('#tab-title-description > a').should('contain', passou)
    })

    it('Deve selecionar um produto especifico da lista', () => {
        cy.get('.product-block').eq(4).click()
        cy.get('#tab-title-description > a').should('contain', passou)
    })




})