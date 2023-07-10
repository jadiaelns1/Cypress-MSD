/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
/* ==== Test Created with Cypress Studio ==== */
it('Deve cadastrar um novo Nível com sucesso', function () {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://3.144.196.238/maintenance/msd_materials/msd/level');
        cy.ntlm(["3.144.196.238"], "usuario_msd", "Edge@123!", "");


        cy.contains('button', 'Novo').click();

        cy.get('input[placeholder=Nível]')
                .should("have.value", "").type("Cytest");

        cy.get('input[placeholder="Valor em horas"]')
                .eq(0).should("have.value", "").type("1234");
        cy.get('input[placeholder="Valor em horas"]')
                .eq(1).should("have.value", "").type("23");

        cy.contains('button', 'Adicionar').click();
        cy.get('table').contains('td', 'Cytest').should('be.visible');
        cy.wait;
        cy.get('button div[name="Trash2"]').eq(0).click()
        cy.contains('button', 'Excluir').click()
        //cy.get('#feedback_toast').should('be.visible');
        cy.get('#feedback_toast').should('have.text', 'Nível Cytest excluído com êxito!');
        
       
       
});