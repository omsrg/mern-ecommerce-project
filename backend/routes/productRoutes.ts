import express from 'express';
import productCtrl from '../controller/productCtrl';

const router = express.Router();

// @desc GET all products from db
// @route GET /api/products
// @access Public
router.get('/', productCtrl.getAllProduct);

// @desc GET a product by id from db
// @route GET /api/products/:id
// @access Public
router.get('/:id', productCtrl.getProductById);

export default router;
