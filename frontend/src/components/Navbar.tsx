import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { AppState } from '../redux/store';
import { CartItemType } from '../types/product';

interface Props {
	toggleClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ toggleClick }: Props) => {
	const onClick = () => {
		toggleClick((prevState) => !prevState);
	};

	const cart = useSelector((state: AppState) => state.cart);
	const { cartItems } = cart;

	const getCartCount = () => {
		return cartItems.reduce((qty: number, item: CartItemType) => item.qty + qty, 0);
	};

	return (
		<nav className='z-10 mx-auto flex items-center justify-between bg-dark py-6 px-5 text-light'>
			<Link to='/'>
				<p className='h3 cursor-pointer'>MERN Shopping Cart</p>
			</Link>

			<ul className='hidden items-center space-x-6 md:flex'>
				<li>
					<Link
						to='/cart'
						className='flex items-center rounded-md bg-[#333] p-3 text-white hover:bg-[#dd219e]'
					>
						<FaShoppingCart className='h-8 w-8 text-light' />
						<span className='ml-2 flex items-center'>
							Cart{' '}
							<span className='ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-dark'>
								{getCartCount()}
							</span>
						</span>
					</Link>
				</li>
				<li>
					<Link to='/' className=''>
						Shop
					</Link>
				</li>
			</ul>

			<div
				className='item-center z-40 flex h-7 w-7 cursor-pointer flex-col justify-between md:hidden'
				onClick={onClick}
			>
				<div className='h-[3px] w-full bg-white'></div>
				<div className='h-[3px] w-full bg-white'></div>
				<div className='h-[3px] w-full bg-white'></div>
			</div>
		</nav>
	);
};

export default Navbar;
