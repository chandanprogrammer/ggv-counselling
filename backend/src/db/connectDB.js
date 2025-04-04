import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `\nMongoDB connected !! Database HOST: ---> ${connectionInstance.connection.host}\n`
    );
  } catch (error) {
    console.log("MONGODB CONNECTION FAILED : ", error.message);
    process.exit(1);
  }
};

export default connectDB;
