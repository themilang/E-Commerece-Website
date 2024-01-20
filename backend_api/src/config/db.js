const mongoose = require("mongoose");

const MONGOURI = "mongodb+srv://milansocialms:CnAyNih9VoyA8ian@cluster0.40hj1sc.mongodb.net/?retryWrites=true&w=majority";

const dbconnection = async () => {
    try {
        await mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

module.exports = { dbconnection };
