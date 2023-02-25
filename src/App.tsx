import type { ReactElement } from 'react'
import ProductList from 'components/ProductsList'
import type { Product } from 'components/ProductComponent'
import data from '../data/products.json'

const properties: Product[] = data.map(p => {
	const product = {
		name: p.Name,
		price: p.Price,
		description: p.Description
	}

	return product
})

export default function App(): ReactElement {
	return (
		<>
			<div>GoScrapy</div>
			<div>
				<ProductList products={properties} />
			</div>
		</>
	)
}
