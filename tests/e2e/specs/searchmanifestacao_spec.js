/// <reference types="cypress">

context('Actions', () =>{
    beforeEach(()=>{
        cy.visit('https://localhost:44380/')
    })
})

it('Preencher dados da consulta de manifestação', () => {
    cy.visit('https://localhost:44380/')
    cy.get('#txtprotocolo').type('2022020002').should('have.value', '2022020002')
    cy.get('#txtsenha').type('PcLhvHb4').should('have.value', 'PcLhvHb4')
    cy.get('#btnpesquisar').click()
})