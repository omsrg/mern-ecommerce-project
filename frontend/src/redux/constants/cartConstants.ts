import { CartItemType } from '../../types/product';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CART_RESET = 'CART_RESET';

export interface AddAction {
	type: typeof ADD_TO_CART;
	payload: CartItemType;
}

export interface RemoveAction {
	type: typeof REMOVE_FROM_CART;
	payload: string | undefined;
}

export interface ResetAction {
	type: typeof CART_RESET;
}

export type CartActionType = AddAction | RemoveAction | ResetAction;
