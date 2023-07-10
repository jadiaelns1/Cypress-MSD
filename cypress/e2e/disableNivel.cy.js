/// <reference types="cypress" />

describe('Desativa e ativa um Nível', () => {
  
  it('Disable', function() {
    cy.visit('http://3.144.196.238/maintenance/msd_materials/msd/level');
    cy.ntlm(["3.144.196.238"], "usuario_msd", "Edge@123!", "");
    cy.wait(5000)
    cy.get('button div[name="Unlock"]').eq(0).click();
    cy.get('.dkvZZU').click();
    cy.get('#feedback_toast').should('have.text', 'Nível Edit bloqueado com êxito!');
    
    cy.get('button div[name="Lock"]').eq(0).click();
    cy.get('.JfFwA').click();
   
    cy.get('#feedback_toast').should('have.text', 'Nível Edit desbloqueado com êxito!');
  });
})