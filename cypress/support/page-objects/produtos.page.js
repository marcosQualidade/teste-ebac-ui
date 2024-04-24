
class ProdutosPage {
    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto(produto) {
        cy.get('[placeholder]').eq(1).type(produto)
        cy.get('[class="button-search btn btn-sm"]').eq(1).click()
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.product-block').contains(nomeProduto).click()
    }   

    addProdutoCarrinho(produto) {
        cy.get('[placeholder]').eq(1).type(produto)
        cy.get('[class="button-search btn btn-sm"]').eq(1).click()
        cy.get('.product_title').should('contain', 'Ariel Roll Sleeve Sweatshirt')

        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.single_add_to_cart_button').click()
    }
    
}

export default new ProdutosPage()