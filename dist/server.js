"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/products', productRoutes_1.default);
const PORT = process.env.PORT || 5000;
// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.join(__dirname, '../frontend/build')));
    app.get('*', (req, res) => res.sendFile(path_1.default.resolve(__dirname, '../', 'frontend', 'build', 'index.html')));
}
else {
    app.get('/', (req, res) => res.send('Please set to production'));
}
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
