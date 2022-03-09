import { ProductType } from '../../types/product';
import { GetProductAction, GetDetailsAction } from '../constants/productConstants';

const initialState = {
	products: [] as ProductType[],
	loading: false,
	error: null,
};
export const getProductsReducer = (
	state: typeof initialState = initialState,
	action: GetProductAction
): typeof initialState => {
	switch (action.type) {
		case 'GET_PRODUCTS_REQUEST':
			return {
				loading: true,
				products: [],
				error: null,
			};
		case 'GET_PRODUCTS_SUCCESS':
			return {
				loading: false,
				products: action.payload,
				error: null,
			};
		case 'GET_PRODUCTS_FAIL':
			return {
				loading: false,
				products: [],
				error: action.payload,
			};
		default:
			return state;
	}
};

interface IDefaultState {
	product: ProductType;
	loading: boolean;
	error: any;
}

const defaultState: IDefaultState = {
	product: {} as ProductType,
	loading: false,
	error: null,
};

export const getProductDetailsReducer = (
	state: IDefaultState = defaultState,
	action: GetDetailsAction
): IDefaultState => {
	switch (action.type) {
		case 'GET_PRODUCT_DETAILS_REQUEST':
			return {
				loading: true,
				product: {} as ProductType,
				error: null,
			};
		case 'GET_PRODUCT_DETAILS_SUCCESS':
			return {
				loading: false,
				product: action.payload,
				error: null,
			};
		case 'GET_PRODUCT_DETAILS_FAIL':
			return {
				loading: false,
				error: action.payload,
				product: {} as ProductType,
			};
		case 'GET_PRODUCT_DETAILS_RESET':
			return {
				product: {} as ProductType,
				loading: false,
				error: null,
			};
		default:
			return state;
	}
};
