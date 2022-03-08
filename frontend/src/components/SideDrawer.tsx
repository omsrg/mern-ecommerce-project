import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { AppState } from '../redux/store';
import { CartItemType } from '../types/product';

export interface ISideDrawer {
	show: boolean;
}

const SideDrawer = ({ show }: ISideDrawer) => {
	const cart = useSelector((state: AppState) => state.cart);
	const { cartItems } = cart;

	const getCartCount = () => {
		return cartItems.reduce((qty: number, item: CartItemType) => item.qty + qty, 0);
	};

	return (
		<div className={`sideDrawer ${!show ? '-translate-x-full' : 'translate-x-0'} `}>
			<ul className='flex flex-col'>
				<li className='flex items-center'>
					<Link
						to='/cart'
						className='flex grow items-center justify-center p-4 text-2xl text-dark hover:bg-[#333] hover:text-white'
					>
						<FaShoppingCart className='h-8 w-8' />
						<span className='ml-2 flex items-center'>
							Cart{' '}
							<span className='ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-dark text-base text-white hover:bg-white hover:text-dark'>
								{getCartCount()}
							</span>
						</span>
					</Link>
				</li>
				<li>
					<Link
						to='/'
						className='flex grow items-center justify-center p-4 text-2xl text-dark hover:bg-[#333] hover:text-white'
					>
						Shop
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideDrawer;
