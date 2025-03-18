const express = require("express");
const path = require("path");
const router = express.Router();
router.use(express.static(path.join(__dirname,"..","public","audio")));
router.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'..','public','audio','audio.html'));
});
module.exports = router;