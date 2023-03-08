/// <reference types="Cypress" />

describe('index.html', () => {
  it('should contain a site id', () => {
    cy.visit('localhost:3080')
    cy.get('h1')
      .should('have.css', 'background-image')
      .and('include', 'logo.png')
  })
});

describe('challenges.html', () => {
  it('should have a working search function', () => {
    cy.visit('localhost:3080/challenges.html')
    cy.get('.challenge-item')
      .first()
      .find('.challenge-title')
      .then(($h3) => {
        const titleName = $h3.text();
        
        cy.get('.filters-toggle').click();
        cy.get('.searchBar')
          .click()
          .type(titleName
          .substring(0, titleName
          .indexOf(' ')));
          cy.get('.challenge-item')
            .find('.challenge-title')
            .then(($challengeItems) => {
            const allFoundTitles = Array.from($challengeItems, item => item.innerText);
            expect(allFoundTitles).to.include(titleName); 
          })
    })
  })
})