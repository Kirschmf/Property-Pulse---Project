import { connect } from 'http2';
import mongoose from 'mongoose';

let isConnected = false;

const connectDB = async ( ) => {
    mongoose.set('strictQuery', true)

    // If the database is already connected, do not connect again!!!
    
    if(isConnected) {
        console.log('MongoDB is already connected');
        return;
    }
    
    // Connect to MongoDB

    try{
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected = true;
        console.log('MongoDB connected...')
    } catch (error) {
        console.log(error);

    }
};

export default connectDB;