import React from 'react';

const ProductItem = ({ img, name, description, price, onPinProduct, id, onRemoveProduct }) => {

	const removeProduct = () => {
		if (global.confirm('Do you want to delete the task?')) {
			onRemoveProduct(id);
		}
	};

	return (
		<div className={`product__list-item`}>

			{img ? <img src={img} alt="product"/> : ''}
			{name ? <h2 className='product__list-name'>{name}</h2> : ''}
			{description ? <p className='product__list-description'>{description}</p> : ''}
			{price ?
				<p className='product__list-description'><span className='product__list-price'>{price}$</span></p> : ''}

			<button onClick={removeProduct} className="product__list-remove">
			</button>
			<button onClick={() => onPinProduct(id)} className='product__list-pin'>
			</button>
		</div>
	);

};
export default ProductItem;
