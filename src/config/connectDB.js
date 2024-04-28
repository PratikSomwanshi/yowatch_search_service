const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");

const AppError = require("../utils/error/AppError");
const { MONGO_URI } = require("./server.config");

async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI);
    } catch (error) {
        throw new AppError(error, StatusCodes.BAD_REQUEST);
    }
}

module.exports = connectDB;
