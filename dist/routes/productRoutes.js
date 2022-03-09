"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productCtrl_1 = __importDefault(require("../controller/productCtrl"));
const router = express_1.default.Router();
// @desc GET all products from db
// @route GET /api/products
// @access Public
router.get('/', productCtrl_1.default.getAllProduct);
// @desc GET a product by id from db
// @route GET /api/products/:id
// @access Public
router.get('/:id', productCtrl_1.default.getProductById);
exports.default = router;
