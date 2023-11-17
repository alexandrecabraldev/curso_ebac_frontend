/// <reference types="cypress" />

describe('Teste de adição de contato',()=>{
    beforeEach(()=>{
        
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('deve adicionar contatos a lista',()=>{

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

    })

})

