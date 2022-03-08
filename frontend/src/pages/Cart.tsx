import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { addToCart, removeFromCart } from '../redux/actions/cartAction';
import { AppState } from '../redux/store';
import { CartItemType } from '../types/product';

const Cart = () => {
	const dispatch = useDispatch();

	const cart = useSelector((state: AppState) => state.cart);
	const { cartItems } = cart;

	const qtyChangeHandler = (id: string | undefined, qty: number) => {
		dispatch(addToCart(id, qty));
	};

	const removeFromCartHandler = (id: string | undefined) => {
		dispatch(removeFromCart(id));
	};

	const getCartCount = () => {
		return cartItems.reduce((qty: number, item: CartItemType) => item.qty + qty, 0);
	};

	const getCartSubTotal = () => {
		return cartItems
			.reduce((price: number, item: CartItemType) => price + item.price * item.qty, 0)
			.toFixed(2);
	};

	return (
		<>
			<div className='layout my-8 flex'>
				<div className='grid md:grid-cols-12'>
					<div className='md:col-span-7'>
						<h2 className='mb-4'>Shopping Cart</h2>
						{cartItems.length === 0 ? (
							<div>
								Your Cart Is Empty{' '}
								<Link to='/' className='font-bold text-blue-500'>
									Go Back
								</Link>
							</div>
						) : (
							cartItems.map((item: any) => (
								<CartItem
									key={item._id}
									item={item}
									qtyChangeHandler={qtyChangeHandler}
									removeHandler={removeFromCartHandler}
								/>
							))
						)}
					</div>

					<div className='h-fit bg-white p-4 shadow-md md:col-span-4 md:col-start-9'>
						<div className='border-b border-dark font-bold'>
							<p className=''>Subtotal ({getCartCount()})</p>
							<p className='py-2'>${getCartSubTotal()}</p>
						</div>
						<button className='mt-4 w-full bg-dark py-2 px-4 text-light'>
							Proceed To Checkout
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
