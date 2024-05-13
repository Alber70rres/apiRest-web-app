import mongoose from "mongoose";
import "dotenv/config";

async function conexionMongo() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected!"))
    .catch((error) => console.log(error));
}

export {conexionMongo}