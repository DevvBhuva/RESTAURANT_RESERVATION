import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect('mongodb+srv://22it010:devbhuva@cluster0.flxn9u0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      dbName: "Restaurant",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
