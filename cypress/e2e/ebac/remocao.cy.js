/// <reference types="cypress" />

describe('Teste de remoção de item da lista',()=>{
    beforeEach(()=>{
        
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve deletar um contato',()=>{
        
        cy.contains('li', 'Pedro').parent().parent().next().contains('button','Deletar').click()
    })

})