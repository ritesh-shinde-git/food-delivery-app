import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://greatstack:33858627@ac-a06r0li-shard-00-00.zx69twt.mongodb.net:27017,ac-a06r0li-shard-00-01.zx69twt.mongodb.net:27017,ac-a06r0li-shard-00-02.zx69twt.mongodb.net:27017/food-del?ssl=true&replicaSet=atlas-cl5quu-shard-0&authSource=admin&appName=Cluster0"
    );
    console.log("✅ DB Connected Successfully");
  } catch (error) {
    console.log("❌ DB Error:", error.message);
  }
};