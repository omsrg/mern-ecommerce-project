import { CartItemType } from '../../types/product';
import { CartActionType } from '../constants/cartConstants';

interface IDefaultState {
	cartItems: CartItemType[];
}

const initialState: IDefaultState = {
	cartItems: [],
};

export const cartReducer = (state: IDefaultState = initialState, action: CartActionType) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			const item = action.payload;

			const existItems = state.cartItems.find(
				(cartItem: CartItemType) => cartItem._id === item._id
			);

			if (existItems) {
				return {
					...state,
					cartItems: state.cartItems.map((cartItem: CartItemType) =>
						cartItem._id === existItems._id ? item : cartItem
					),
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
				cartItems: state.cartItems.filter(
					(cartItem: CartItemType) => cartItem._id !== action.payload
				),
			};

		default:
			return state;
	}
};
