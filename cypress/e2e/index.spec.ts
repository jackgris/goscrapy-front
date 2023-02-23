describe('Basic flow', () => {
	beforeEach(() => {
		cy.viewport('macbook-13')
	})

	it('Should render text correctly', () => {
		cy.visit('/')
		cy.contains('GoScrapy')
	})
})
