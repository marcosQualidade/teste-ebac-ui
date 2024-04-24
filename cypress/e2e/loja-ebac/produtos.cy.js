/// <reference types="cypress" />

import produtosPage from "../../support/page-objects/produtos.page"

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        //cy.visit('produtos')
        produtosPage.visitarUrl()
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

    // Implementando automação com pageObjects
    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Bruno Compete Hoodie'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    })
    
    it('Deve buscar um produto da lista', () => {
        let produto = 'Ajax Full-Zip Sweatshirt'
        produtosPage.buscarProdutoLista(produto)
        cy.get('.product_title').should('contain', produto) 
    })

    it('Deve adicionar um produto ao carrinho de compras', () => {
        let nomeProduto = 'Ariel-Roll-Sleeve-Sweatshirt'
        produtosPage.visitarProduto(nomeProduto)
        produtosPage.addProdutoCarrinho( 'M', 'Green', 5)
        cy.get('.woocommerce-message').should('contain', '5 × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
    })

    it('Deve adicionar produtos ao carrinho usando massa de dados', () => {
        cy.fixture('produtos').then((dados) => {
            produtosPage.visitarProduto(dados[4].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[4].tamanho, 
                dados[4].cor, 
                dados[4].quantidade)
                cy.get('.product_title').should('contain', dados[4].nomeProduto)    
        }) 
    
    })         

})