const mongoose = require("mongoose");

const MONGO_URI= process.env.MONGO_URI;

const dbconnection = async () => {
    try {
        console.log("MongoDB URI:", MONGO_URI);
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

module.exports = { dbconnection };
