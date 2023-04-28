import mongoose from "mongoose";

async function Connection(username, password) {
  const URL = `mongodb+srv://rajeshkumar2233:9691501076Rj@cluster0.mrghs.mongodb.net/Datablogs`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connection established");
  } catch (error) {
    console.log("Error connecting", error);
  }
}
export default Connection;
