// import { CartItemType } from '../../types/product';
import { CartActionType } from '../constants/cartConstants';

const initialState = {
	cartItems: [],
};

export const cartReducer = (state: any = initialState, action: CartActionType) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			const item = action.payload;

			const existItems = state.cartItems.find((x: any) => x._id === item._id);

			if (existItems) {
				return {
					...state,
					cartItems: state.cartItems.map((x: any) => (x._id === existItems._id ? item : x)),
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item],
				};
			}

		case 'REMOVE_FROM_CART':
			return {
				...state,
				cartItems: state.cartItems.filter((x: any) => x._id !== action.payload),
			};

		default:
			return state;
	}
};
