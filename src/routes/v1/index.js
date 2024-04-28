const router = require("express").Router();

const videoSearch = require("./video.route");

router.use("/search", videoSearch);

module.exports = router;
