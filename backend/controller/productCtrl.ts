import { Request, Response } from 'express';
import Product from '../models/Product';

const productCtrl = {
	getAllProduct: async (req: Request, res: Response) => {
		try {
			const products = await Product.find({});

			res.status(200).json(products);
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: 'Server Error!' });
		}
	},

	getProductById: async (req: Request, res: Response) => {
		try {
			const { id } = req.params;
			const product = await Product.findById(id);

			res.status(200).json(product);
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: 'Server Error!' });
		}
	},
};

export default productCtrl;
