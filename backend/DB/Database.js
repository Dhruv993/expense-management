import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db = "mongodb+srv://dhruvjain903:qTaP1wSBGlwHG1gD@cluster0.qnusp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}