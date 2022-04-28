const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

router.get("/", (req, res) => {
    res.render("photo");
  });
router.post('/uploadfile', upload, function (req, res) {
  
      if(req.files){
          console.log(req.files)
          console.log("files uploaded")
        }
  })
module.exports = router
