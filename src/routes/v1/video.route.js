const { VideoSearch } = require("../../controller");

const router = require("express").Router();

router.post("/", VideoSearch.createVideoSearch);

module.exports = router;
