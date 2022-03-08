import { GetProductAction, GetDetailsAction } from '../constants/productConstants';

const initialState = {
	products: [],
};
export const getProductsReducer = (state: any = initialState, action: GetProductAction) => {
	switch (action.type) {
		case 'GET_PRODUCTS_REQUEST':
			return {
				loading: true,
				products: [],
			};
		case 'GET_PRODUCTS_SUCCESS':
			return {
				loading: false,
				products: action.payload,
			};
		case 'GET_PRODUCTS_FAIL':
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const getProductDetailsReducer = (
	state: any = { product: {} },
	action: GetDetailsAction
) => {
	switch (action.type) {
		case 'GET_PRODUCT_DETAILS_REQUEST':
			return {
				loading: true,
			};
		case 'GET_PRODUCT_DETAILS_SUCCESS':
			return {
				loading: false,
				product: action.payload,
			};
		case 'GET_PRODUCT_DETAILS_FAIL':
			return {
				loading: false,
				error: action.payload,
			};
		case 'GET_PRODUCT_DETAILS_RESET':
			return {
				product: {},
			};
		default:
			return state;
	}
};
