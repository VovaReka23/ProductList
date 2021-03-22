import React, { useState } from 'react';

const ProductField = ({ onAddProduct }) => {
	const [form, setForm] = useState({
		img: '',
		title: '',
		description: '',
		price: '',
	});

	const onInfoChangeHandler = (event) => {
		const { value, name } = event.target;

		setForm((form) => ({
			...form,
			[name]: value,
		}));
	};



	const onPriceChangeHandler = (event) => {
		const { value } = event.target;
		if (/^\d+$/.test(value)) {
			setForm((form) => ({
				...form,
				price: value,
			}));
		}
	};

	const onImgChangeHandler = (event) => {
		if(event.target.files.length) {
			handleFiles(event.target.files);
		}
	};
	function handleFiles(files) {
		const reader = new FileReader();
		const extension = files[0].name.split('.').slice(-1).join('');
		if(files.length > 1 || (extension !== 'jpg' && extension !== 'png')) return;
		reader.readAsDataURL(files[0]);
		reader.addEventListener("load", function () {
			const data = reader.result

			setForm((form) => ({
					...form,
					img:  data,
				}));
		}, false);
	}

	const addProduct = () => {
		onAddProduct({
			title: form.title,
			description: form.description,
			price: form.price,
			img: form.img
		});
		setForm({
			img: '',
			title: '',
			description: '',
			price: '',
		});
	};

	const handleKeyUp = (event) => {
		if (event.keyCode === 13) {
			addProduct();
		}
	};

	return (
		<div className="product__add-field">
			<input
				name="img"
				accept=".jpg, .png"
				onChange={onImgChangeHandler}
				type="file"
				placeholder="img"
			/>
			<input
				value={form.title}
				name="title"
				onChange={onInfoChangeHandler}
				type="text"
				placeholder="Enter the title"
			/>
			<input
				value={form.description}
				name="description"
				onChange={onInfoChangeHandler}
				type="text"
				placeholder="Enter the description "
			/>
			<input
				value={form.price}
				name="price"
				onChange={onPriceChangeHandler}
				type="text"
				placeholder="Enter the price"
			/>

			<button onClick={addProduct} onKeyUp={handleKeyUp} className="product__add-field-button">
			</button>
		</div>
	);
};

export default ProductField;
