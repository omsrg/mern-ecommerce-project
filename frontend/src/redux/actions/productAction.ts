import axios from 'axios';
import { Dispatch } from 'redux';
import { GetProductAction, GetDetailsAction } from '../constants/productConstants';

export const getProducts = () => async (dispatch: Dispatch<GetProductAction>) => {
	try {
		dispatch({
			type: 'GET_PRODUCTS_REQUEST',
		});

		const { data } = await axios.get('/api/products');

		dispatch({
			type: 'GET_PRODUCTS_SUCCESS',
			payload: data,
		});
	} catch (error: any) {
		dispatch({
			type: 'GET_PRODUCTS_FAIL',
			payload: error.response ? error.response?.data?.message : error.message,
			// payload: false
		});
	}
};

export const getProductDetails =
	(id: string | undefined) => async (dispatch: Dispatch<GetDetailsAction>) => {
		try {
			dispatch({
				type: 'GET_PRODUCT_DETAILS_REQUEST',
			});

			const { data } = await axios.get(`/api/products/${id}`);

			dispatch({
				type: 'GET_PRODUCT_DETAILS_SUCCESS',
				payload: data,
			});
		} catch (error: any) {
			dispatch({
				type: 'GET_PRODUCT_DETAILS_FAIL',
				payload: error.response ? error.response?.data?.message : error.message,
				// payload: false
			});
		}
	};

export const removeProductDetails = () => (dispatch: Dispatch<GetDetailsAction>) => {
	dispatch({
		type: 'GET_PRODUCT_DETAILS_RESET',
	});
};
