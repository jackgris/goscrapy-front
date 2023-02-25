import ProductComponent, { type Product } from './ProductComponent'

interface Properties {
	products: Product[]
}

const ProductList = ({ products }: Properties): JSX.Element => (
	<div>
		{products.map(product => (
			<ProductComponent key={product.name} product={product} />
		))}
	</div>
)

export default ProductList
