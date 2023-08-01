const express = require('express');
const router = express.Router();



router.get("/", (req, res) => {
    res.render("photo");
  });
router.post('/uploadfile', function (req, res) {
  
      if(req.files){
          console.log(req.files.photoID)
          console.log("files uploaded")
         
        }

      

  })
module.exports = router
