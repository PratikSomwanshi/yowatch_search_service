const { StatusCodes } = require("http-status-codes");

const { ErrorResponse, SuccessResponse } = require("../utils/common");
const { VideoSearch } = require("../services");

async function createVideoSearch(req, res) {
    try {
        const movie_name = req.body.movieName;
        const image = req.body.image;
        const description = req.body.description;
        const release = req.body.release;
        const movie_id = req.body.movieID;

        const response = await VideoSearch.createVideoSearch({
            movie_id,
            image,
            description,
            release,
            movie_name,
        });

        SuccessResponse.message = "successfully created the product";
        SuccessResponse.data = response;

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.CREATED).json(ErrorResponse);
    }
}

module.exports = {
    createVideoSearch,
};
