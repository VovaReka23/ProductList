export const addProducts = ({ img, title, description, price, }) => ({
	type: 'ADD_PRODUCTS',
	payload: {img, title, description, price},
});

export const removeProduct = (id) => ({
	type: 'REMOVE_PRODUCT',
	payload: id,
});

export const searchProducts = (search) => ({
	type: 'SEARCH_PRODUCTS',
	payload: search,
});

export const setPinProduct = (id) => ({
	type: 'SET_PIN_PRODUCT',
	payload: id,
});
