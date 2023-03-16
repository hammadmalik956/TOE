const express = require("express");
const router = express.Router();
const { authorize, isAdmin,upload } = require("../middlewares");



router.post("/upload",[upload.array("file")],(req,res)=>{
    res.send("Image Uploaded")
});



module.exports = router;
