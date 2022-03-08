import { Link } from 'react-router-dom';
import { ProductType } from '../types/product';

const Product = ({ name, imageUrl, description, _id, price }: ProductType) => {
	return (
		<div className='my-4 mx-auto flex cursor-pointer flex-col justify-between bg-white p-4 shadow-md lg:w-72'>
			<img src={imageUrl} alt={name} className='h-44 w-full rounded-md' />

			<div className='space-y-2'>
				<p className='text-base'>{name}</p>

				<p className=''>{description.substring(0, 100)}...</p>

				<p className='font-bold'>${price}</p>

				<Link
					to={`/product/${_id}`}
					className='hover: block w-full border border-dark bg-white py-2 px-4 text-center text-base text-dark hover:bg-dark hover:text-white'
				>
					View
				</Link>
			</div>
		</div>
	);
};

export default Product;
