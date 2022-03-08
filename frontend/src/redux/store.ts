import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducer/cartReducer';
import { getProductsReducer, getProductDetailsReducer } from './reducer/productReducer';

const reducer = combineReducers({
	cart: cartReducer,
	getProducts: getProductsReducer,
	getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem('cart')
	? JSON.parse(localStorage.getItem('cart') as string)
	: [];

const INITIAL_STATE = {
	cart: {
		cartItems: cartFromLocalStorage,
	},
};

export type AppState = ReturnType<typeof reducer>;

const store = createStore(
	reducer,
	INITIAL_STATE,
	composeWithDevTools(applyMiddleware(...middleware))
);
// const store = createStore(
// 	reducer,
// 	// applyMiddleware(thunk as ThunkMiddleware<AppState, GetProductAction>)
// );

export default store;
