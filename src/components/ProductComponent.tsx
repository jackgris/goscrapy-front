export interface Product {
	name: string
	price: string
	description: string
}

export interface Properties {
	product: Product
}

const ProductComponent = ({ product }: Properties): JSX.Element => (
	<div>
		<h2>{product.name}</h2>
		<p>{product.description}</p>
		<p>Price: ${product.price}</p>
	</div>
)

export default ProductComponent
