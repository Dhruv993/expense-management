import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db = "mongodb+srv://chiragthakur8006:4z2BUHwln64f5UsN@cluster0.n1v3o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}