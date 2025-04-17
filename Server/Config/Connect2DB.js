import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

console.log(process.env.MONGO_URI);
async function connect() {
  try {
    console.log(`Attempting To Connect To Database`);
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: `Cricketer-Management-System`,
    });

    console.log(`###############-Connected To DB-###############`);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export default connect;
