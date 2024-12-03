const router = require("express").Router();
module.exports = router;

router.use("/players", require("./players"));
router.use("/players/:id", require("./players/:id"));
