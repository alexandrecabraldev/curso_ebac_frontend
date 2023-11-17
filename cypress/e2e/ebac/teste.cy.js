/// <reference types="cypress" />

describe('Teste de inclusao edição e remoção',()=>{
    beforeEach(()=>{
        
        cy.visit('https://agenda-contatos-react.vercel.app/')

        cy.get('input[type="text"]').type('Alexandre')
        cy.get('input[type="email"]').type('alexandre@email.com')
        cy.get('input[type="tel"]').type('00985457877')
        cy.get('button[type="submit"]').click()

        cy.get('ul > li').should('contain','Alexandre')
        cy.get('ul > li').should('contain','alexandre@email.com')
        cy.get('ul > li').should('contain','00985457877')

        cy.get('input[type="text"]').type('Pedro')
        cy.get('input[type="email"]').type('pedro@email.com')
        cy.get('input[type="tel"]').type('74102589630')
        cy.get('button[type="submit"]').click()

        cy.get('ul > li').should('contain','Pedro')
        cy.get('ul > li').should('contain','pedro@email.com')
        cy.get('ul > li').should('contain','74102589630')

        cy.contains('li', 'Alexandre').parent().parent().next().contains('button','Editar').click()
        
        cy.get('input[type="text"]').clear().type('Fulano Da Silva')
        
        cy.get('input[type="email"]').clear().type('fulano@email.com')
        
        cy.get('input[type="tel"]').clear().type('01234567899')
        
        cy.get('button[class="alterar"]').click()
    })


    it('Deletar um contato',()=>{
        
        cy.contains('li', 'Pedro').parent().parent().next().contains('button','Deletar').click()
    })

})

