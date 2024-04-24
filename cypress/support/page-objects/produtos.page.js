
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

    visitarProduto(nomeProduto) {
    //  cy.visit(`produtos/${nomeProduto}`)
        const urlFormatada = nomeProduto.replace(/ /g, '-')
        cy.visit(`produtos/${urlFormatada}`)
    }

    addProdutoCarrinho(tamanho, cor, quantidade) {
        cy.get(`.button-variable-item-${tamanho}`).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get(`.input-text`).clear().type(quantidade)        
        cy.get('.single_add_to_cart_button').click()
    }
    
}

export default new ProdutosPage()