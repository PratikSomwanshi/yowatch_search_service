const mongoose = require("mongoose");

const videoSearchSchema = new mongoose.Schema({
    movie_name: {
        type: String,
        required: true,
    },
    description: { type: String, required: false, maxLength: 2000 },
    image: {
        type: String,
        required: true,
    },
    release: {
        type: String,
        required: true,
    },
    movie_id: {
        type: String,
        require: true,
    },
});

const videoSearchModel = mongoose.model("VideoSearch", videoSearchSchema);

module.exports = videoSearchModel;
