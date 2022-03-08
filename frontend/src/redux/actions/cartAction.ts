import axios from 'axios';
import { Dispatch } from 'redux';
import { CartActionType } from '../constants/cartConstants';
import { AppState } from '../store';

export const addToCart =
	(id: string | undefined, qty: number) =>
	async (dispatch: Dispatch<CartActionType>, getState: () => AppState) => {
		const { data } = await axios.get(`/api/products/${id}`);

		dispatch({
			type: 'ADD_TO_CART',
			payload: {
				_id: data._id,
				name: data.name,
				imageUrl: data.imageUrl,
				price: data.price,
				countInStock: data.countInStock,
				qty: qty,
			},
		});

		localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
	};

export const removeFromCart =
	(id: string | undefined) => (dispatch: Dispatch<CartActionType>, getState: () => AppState) => {
		dispatch({
			type: 'REMOVE_FROM_CART',
			payload: id,
		});

		localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
	};
