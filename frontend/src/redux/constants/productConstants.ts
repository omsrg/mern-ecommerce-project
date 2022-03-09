import { ProductType } from '../../types/product';

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';

export const GET_PRODUCT_DETAILS_REQUESTS = 'GET_PRODUCT_DETAILS_REQUEST';
export const GET_PRODUCT_DETAILS_SUCCESS = 'GET_PRODUCT_DETAILS_SUCCESS';
export const GET_PRODUCT_DETAILS_FAIL = 'GET_PRODUCT_DETAILS_FAIL';
export const GET_PRODUCT_DETAILS_RESET = 'GET_PRODUCT_DETAILS_RESET';

interface IGetProductsRequest {
	type: typeof GET_PRODUCTS_REQUEST;
}

interface IGetProductSuccess {
	type: typeof GET_PRODUCTS_SUCCESS;
	payload: ProductType[];
}

interface IGetProductsFail {
	type: typeof GET_PRODUCTS_FAIL;
	payload: any;
}

export type GetProductAction = IGetProductSuccess | IGetProductsFail | IGetProductsRequest;

interface IGetDetailsRequest {
	type: typeof GET_PRODUCT_DETAILS_REQUESTS;
}

interface IGetDetailsSuccess {
	type: typeof GET_PRODUCT_DETAILS_SUCCESS;
	payload: ProductType;
}

interface IGetDetailsFail {
	type: typeof GET_PRODUCT_DETAILS_FAIL;
	payload: any;
}

interface IGetDetailsReset {
	type: typeof GET_PRODUCT_DETAILS_RESET;
}

export type GetDetailsAction =
	| IGetDetailsRequest
	| IGetDetailsSuccess
	| IGetDetailsFail
	| IGetDetailsReset;
