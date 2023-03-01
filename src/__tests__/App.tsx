import { render, screen } from '@testing-library/react'
import App from 'App'
import { BrowserRouter } from 'react-router-dom'

describe('<App />', () => {
	it('renders', async () => {
		window.history.pushState({}, 'Home', '/')
		render(<App />, { wrapper: BrowserRouter })

		await expect(
			screen.findByText('GoScrapyFront')
		).resolves.toBeInTheDocument()
	})
})
