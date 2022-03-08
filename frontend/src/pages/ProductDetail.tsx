import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../redux/actions/productAction';
import { addToCart } from '../redux/actions/cartAction';
import { AppState } from '../redux/store';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { RouteComponentProps } from "react-router-dom";

const ProductDetail = () => {
	const [qty, setQty] = useState(1);
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const productDetails = useSelector((state: AppState) => state.getProductDetails);
	const { product, loading, error } = productDetails;

	const { id } = useParams();

	useEffect(() => {
		if (product && id !== product._id) {
			dispatch(getProductDetails(id));
		}
	}, [dispatch, product, id]);

	const addToCartHandler = () => {
		dispatch(addToCart(product._id, qty));
		navigate('/cart');
	};

	return (
		<main className=' my-4 mx-auto max-w-screen-2xl'>
			{loading ? (
				<h2>Loading...</h2>
			) : error ? (
				<h2>{error}</h2>
			) : (
				<div className='grid gap-4 md:grid-cols-12'>
					<div className='flex flex-col md:col-span-6 lg:col-span-8 lg:flex-row'>
						<div className='m-4 flex justify-center'>
							<img src={product.imageUrl} alt={product.name} />
						</div>
						<div className='m-4 h-fit bg-white text-sm shadow-md'>
							<p className='border-b p-4 text-xl font-bold'>{product.name}</p>
							<p className='border-b p-4'>Price: ${product.price}</p>
							<p className='p-4'>{product.description}</p>
						</div>
					</div>
					<div className='flex justify-center md:col-span-6 lg:col-span-4'>
						<div className='m-4 h-fit bg-white p-4 text-sm shadow-md md:w-64'>
							<p className='grid grid-cols-2 p-4'>
								Price: <span>${product.price}</span>
							</p>
							<p className='grid grid-cols-2 p-4'>
								Status: <span>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span>
							</p>

							<p className='grid grid-cols-2 p-4'>
								Qty
								<select
									value={qty}
									onChange={(e) => setQty(parseInt(e.target.value))}
									className='border border-dark py-3 px-4'
								>
									{[...Array(product.countInStock).keys()].map((x) => (
										<option key={x + 1} value={x + 1}>
											{x + 1}
										</option>
									))}
								</select>
							</p>

							<p className='grid grid-cols-2'>
								<button
									className='col-span-2 cursor-pointer rounded-md bg-dark py-3 px-4 text-white'
									onClick={addToCartHandler}
								>
									Add to cart
								</button>
							</p>
						</div>
					</div>
				</div>
			)}
		</main>
	);
};
export default ProductDetail;
