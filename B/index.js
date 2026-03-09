// A.js
const express = require("express");
const router = express.Router();

router.get("/B", (req, res) => {
    res.send("B root route");
});


module.exports = router;
