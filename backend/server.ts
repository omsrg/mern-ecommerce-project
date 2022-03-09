import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db';
import productRoutes from './routes/productRoutes';

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

// Serve frontend
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../frontend/build')));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html'))
	);
} else {
	app.get('/', (req, res) => res.send('Please set to production'));
}

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
