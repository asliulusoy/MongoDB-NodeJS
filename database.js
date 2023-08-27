import mongoose from "mongoose";

const conn = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "EduConnect",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Successfully connected to the EduConnect Database");
    }).catch((err) => {
        console.log(`Connection failed:, ${err}`);
    });
};

export default conn;