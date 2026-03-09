// A.js
const express = require("express");
const router = express.Router();

router.get("/A", (req, res) => {
    res.send("A root route");
});


module.exports = router;
