import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Product from '../components/Product';
import { AppState } from '../redux/store';
import { getProducts as listProducts } from '../redux/actions/productAction';
import { ProductType } from '../types/product';

const HomeScreen = () => {
	const dispatch = useDispatch();
	const getProducts = useSelector((state: AppState) => state.getProducts);

	const { products, loading, error } = getProducts;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<div className='layout my-4'>
			<h2 className='mb-4 ml-2 text-2xl text-dark'>Latest Products</h2>
			<div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4'>
				{loading ? (
					<h2>Loading...</h2>
				) : error ? (
					<h2>{error}</h2>
				) : (
					products.map((product: ProductType) => (
						<Product
							key={product._id}
							name={product.name}
							description={product.description}
							price={product.price}
							imageUrl={product.imageUrl}
							_id={product._id}
							countInStock={product.countInStock}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default HomeScreen;
