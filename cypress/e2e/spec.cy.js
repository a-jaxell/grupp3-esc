describe('Checks that localhost is running', () => {
  it('passes', () => {
    cy.visit('localhost:5501')
  })
})

describe('Checks that version of site on GHPages is running', () =>  {
  it('passes', () => {
    cy.visit('https://a-jaxell.github.io/grupp3-esc/');
  })
})

describe('It navigates to rooms, unchecks onsite, and books the first room', () => {
  it('passes', () => {
    cy.visit('https://a-jaxell.github.io/grupp3-esc/');
    cy.contains('Online challenges').click();
    cy.contains('Filter Challenges').click();
    cy.get('#checkBoxOnsite').uncheck();
    cy.get('li').children('.button').first().click();
    cy.get('.date-input').type("2023-03-28");
    cy.contains('Search avaliable times').click();
    cy.get('.name-input').type('Pina Colada');
    cy.get('.email-input').type('example@lol.com');
    cy.contains('Click to proceed').click();
    cy.contains('Back to booking').click();
  })
})