Cypress.Commands.add('login', (userName, password) => {
    cy.get('#username').type(userName)
    cy.get('#password').type(password)
    cy.get('.woocommerce-form > .button').click()
})

Cypress.Commands.add('preCadastro', (email, senha, msg) => {      
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()
})

Cypress.Commands.add('novoCadastro', (email, senha) => {
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()
})

Cypress.Commands.add('detalheConta', (nome, sobreNome, apelido) => {
    cy.get('#account_first_name').clear()
    cy.get('#account_first_name').type(nome)
    
    cy.get('#account_last_name').clear()
    cy.get('#account_last_name').type(sobreNome)
    cy.get('#account_display_name').clear()

    cy.get('#account_display_name').type(apelido)
    cy.get('.woocommerce-Button').click()
})
