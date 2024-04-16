/// <reference  types="cypress" /> 

describe('Ebac-shop deve estar online', () => {
    // Verifica se a loja está no ar     
    it('acessando a pagina de login', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#tbay-topbar').should('contain', 'Sign up')
    })  
})

describe('Registro na Ebac-Shop', () => {

    it('deve poder registrar novo usuário na plataforma', () => {
        // Acessa a tela de login, e garante que o usuário tenha a possiblilidade de registrar novo usuário
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get(':nth-child(2) > h2').should('contain', 'Register')

        // Insere usuário e senha e clica no botão para registrar novo usuário
        cy.get('#reg_email').type('gaviao.arqueiro@teste.com.br')
        cy.get('#reg_password').type('Qa12345678')
        cy.get(':nth-child(4) > .button').click()
        
        // Verifica se o usuário foi registrado com sucesso via mensagem de boas vindas
        cy.contains('gaviao.arqueiro !').should('exist')       
        
        // Faz logout da aplicação validando via mensagem de texto na página.
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').click()
        cy.get('.products-carousel-thumbnail > .widget-title > span').should('contain', 'PRODUTOS SUGERIDOS') // Não encontra o elemento  
        

    })

})