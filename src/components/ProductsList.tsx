import ProductComponent, { type Product } from './ProductComponent'

interface Properties {
	products: Product[]
}

const STYLE = 'p-5'

const ProductList = ({ products }: Properties): JSX.Element => (
	<div className={`${STYLE}`}>
		{products.map(product => (
			<ProductComponent key={product.name} product={product} />
		))}
	</div>
)

export default ProductList
