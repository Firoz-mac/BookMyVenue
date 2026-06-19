import mongoose from 'mongoose';

const connectDB = async () =>{
    try {
        mongoose.connection.on('connected', ()=>console.log('Database Connected'))
        await mongoose.connect(`${process.env.MONGO_URI}/bookMyVenue`);
    } catch (error) {
        console.error("Database Connection Error:", error.message);
        process.exit(1);
    }
};

export default connectDB;