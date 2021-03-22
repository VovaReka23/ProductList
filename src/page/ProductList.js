import React from 'react';
import { ProductItem, ProductField } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import {
	addProducts,
	removeProduct,
	searchProducts,
	setPinProduct,
} from '../redux/actions/product';
import { productsListSelector } from '../redux/reducers/products';

const ProductList = () => {
	const dispatch = useDispatch();
	const products = useSelector(({ products }) => productsListSelector(products));
	const search = useSelector((state) => state.products.search);

	const onRemoveProduct = (id) => {
		dispatch(removeProduct(id));
	};

	const onSearchProduct = (event) => {
		const { value } = event.target;
		dispatch(searchProducts(value));
	};

	const onPinProduct = (id) => {
		dispatch(setPinProduct(id));
	};

	const onAddProduct = (name, description, price, img) => {
		dispatch(addProducts(name, description, price, img));
	};

	return (
		<div className="product">
			<div className="product__header">
				<h1 className="product__header-title">My Product</h1>
			</div>
			<div className="product__search">
				<input onChange={onSearchProduct} value={search} type="text" placeholder="Search" />
			</div>
			<ProductField onAddProduct={onAddProduct} />
			<div className="product__list">
				{products.map((product) => (
					<ProductItem
						key={`${product.name}-id-${product.id}`}
						{...product}
						onRemoveProduct={() => onRemoveProduct(product.id)}
						onPinProduct={() => onPinProduct(product.id)}
					/>
				))}
			</div>
		</div>
	);
};
export default ProductList;
