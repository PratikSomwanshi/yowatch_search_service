const VideoSearch = require("../model/VideoSearch");
const CrudRepository = require("./crud.repository");

class VideoSearchRepository extends CrudRepository {
    constructor() {
        super(VideoSearch);
    }
}

module.exports = VideoSearchRepository;
