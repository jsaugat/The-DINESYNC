import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `\n SUCCESS :: MongoDB Connected, \n DB HOST: ${connectionInstance.connection.host}`
    );
    // connection.host: while working on production or development, lets us know which host I'm connected to
  } catch (error) {
    console.error(" FAILURE :: MongoDB failed to connect:", error);
    process.exit(1); // forcefully end the execution of a Node.js application.
  }
};

export default connectDB;

// Alternatively :
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log("✅ SUCCESS :: MongoDB Connection");
//     app.listen(port, () => { console.log(`👁️  WATCHING PORT : http://localhost:${port}`) });
//   })
//   .catch((error) => {
//     console.error("❌ FAILURE :: MongoDB Connection:", error);
//   });
