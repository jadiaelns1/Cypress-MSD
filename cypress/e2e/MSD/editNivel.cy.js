/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
/* ==== Test Created with Cypress Studio ==== */
it('Deve Editar um novo Nível com sucesso', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://3.144.196.238/maintenance/msd_materials/msd/level');
    cy.ntlm(["3.144.196.238"], "usuario_msd", "Edge@123!", "");

    cy.get('button div[name="Edit"]').eq(0).click()
    cy.get('input[placeholder=Nível]')
        .clear('Cyedit').type("Edit");
    cy.get('input[placeholder="Valor em horas"]')
        .eq(0).clear('4444').type(faker.random.numeric(4));
    cy.get('input[placeholder="Valor em horas"]')
        .eq(1).clear('444').type(faker.random.numeric(2));
        cy.get('input[type="checkbox"]').check()

        cy.contains('button', 'Salvar').click();
        cy.get('#feedback_toast').should('have.text', 'Nível Edit alterado com êxito!');
        cy.get('#feedback_toast').should('contain', 'alterado com êxito!');

});