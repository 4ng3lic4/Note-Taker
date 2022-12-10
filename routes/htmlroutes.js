
//making a route
const router = require("express").Router();
const path = require("path");

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})
//this needs to be the last route we use
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})



module.exports= router;