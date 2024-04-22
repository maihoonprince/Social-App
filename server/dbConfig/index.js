import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });

        console.log("DataBase Connected Successfully");
    } catch (error){
        console.log("DB Error: "+ error);
    }
};