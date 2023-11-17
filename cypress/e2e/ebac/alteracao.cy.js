/// <reference types="cypress" />

describe('Teste de alteraçao de contato',()=>{
    beforeEach(()=>{
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve editar um contato da lista',()=>{

        cy.contains('li', 'Alexandre').parent().parent().next().contains('button','Editar').click()
        
        cy.get('input[type="text"]').clear().type('Fulano Da Silva')
        
        cy.get('input[type="email"]').clear().type('fulano@email.com')
        
        cy.get('input[type="tel"]').clear().type('01234567899')
        
        cy.get('button[class="alterar"]').click()
    })

})