import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI as string);
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('MongoDB connection FAILED');
		process.exit(1);
	}
};

export default connectDB;
