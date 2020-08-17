function isVisible(locator) {
 cy.get(locator).should("be.visible");
}

function click(locator) {
 cy.get(locator).click();
}

module.exports = {
 isVisible,
 click
};