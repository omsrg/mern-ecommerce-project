import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { CartItemType } from '../types/product';

interface Props {
	item: CartItemType;
	qtyChangeHandler: (id: string | undefined, qty: number) => void;
	removeHandler: (id: string | undefined) => void;
}

const CartItem = ({ item, qtyChangeHandler, removeHandler }: Props) => {
	return (
		<div className='cartItem'>
			<div className='cartitem__image'>
				<img src={item.imageUrl} alt={item.name} />
			</div>
			<Link to={`/product/${987}`} className='text-dark'>
				<p>{item.name}</p>
			</Link>
			<p className='text-xs md:text-base'>${item.price}</p>
			<select
				className='border border-dark py-2 px-4'
				value={item.qty}
				onChange={(e) => qtyChangeHandler(item._id, parseInt(e.target.value))}
			>
				{[...Array(item.countInStock).keys()].map((x) => (
					<option key={x + 1} value={x + 1}>
						{x + 1}
					</option>
				))}
			</select>
			<button className=' py-2 px-4 text-red-500' onClick={() => removeHandler(item._id)}>
				<FaTrash />
			</button>
		</div>
	);
};

export default CartItem;
