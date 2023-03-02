import { defineConfig } from 'cypress'

export default defineConfig({
	fileServerFolder: 'dist',
	fixturesFolder: false,
	projectId: '48i9ez',

	e2e: {
		baseUrl: 'http://localhost:4173/',
		specPattern: 'cypress/e2e/**/*.ts'
	},

	component: {
		devServer: {
			framework: 'react',
			bundler: 'vite'
		}
	}
})
