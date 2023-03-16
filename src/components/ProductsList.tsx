import ProductComponent, { type Product } from './ProductComponent'

import { useState } from 'react'
import PaginationComponent from './PaginationComponent'

interface Properties {
	products: Product[]
}

const STYLE = 'p-5'

const ProductList = ({ products }: Properties): JSX.Element => {
	const defaultState = 1
	const [currentPage, setCurrentPage] = useState(defaultState)
	const pageSize = 5
	const totalItems = products.length

	const onHandlePageChange = (page: number): void => {
		setCurrentPage(page)
	}

	// Get the items for the current page
	const startIndex = (currentPage - defaultState) * pageSize
	const endIndex = startIndex + pageSize
	const currentItems = products.slice(startIndex, endIndex)

	return (
		<div>
			<div className={`${STYLE}`}>
				{currentItems.map((item: Product) => (
					<ProductComponent key={item.name} product={item} />
				))}
			</div>
			<PaginationComponent
				currentPage={currentPage}
				pageSize={pageSize}
				totalItems={totalItems}
				onChangePage={onHandlePageChange}
			/>
		</div>
	)
}

export default ProductList
