const { VideoSearchRepository } = require("../repository");
const AppError = require("../utils/error/AppError");
const { StatusCodes } = require("http-status-codes");

const videoSearchRepository = new VideoSearchRepository();

async function createVideoSearch(data) {
    try {
        return await videoSearchRepository.create(data);
    } catch (error) {
        throw new AppError(error, StatusCodes.BAD_REQUEST);
    }
}

module.exports = {
    createVideoSearch,
};
