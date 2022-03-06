import products from './data/products';
import connectDB from './config/db';
import Product from './models/Product';

import dotenv from 'dotenv';

dotenv.config();

connectDB();

const importData = async () => {
	try {
		await Product.deleteMany({});

		await Product.insertMany(products);

		console.log('Data Import Success');

		process.exit();
	} catch (error) {
		console.error('Error with data import', error);
		process.exit(1);
	}
};

importData();
