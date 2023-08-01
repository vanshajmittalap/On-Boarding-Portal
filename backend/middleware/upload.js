// const path = require('path');
// const multer = require('multer');
// const express = require('express')
// const app = express()


// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../client/Uploaditems/");
//   },
//   filename: function (req, file, cb) {
//     cb(null,file.fieldname + "-" + file.originalname);
//   },
// });

// var upload = multer({ storage: storage });

// var uploadMultiple = upload.fields([{ name: 'photoID' },{ name: 'photo' },{ name: 'marksheet12' },{ name: 'marksheet10' },{ name: 'charactercertificate' },{ name: 'jeeresult' },{ name: 'josaa' },{ name: 'castecertificate' },{ name: 'castemaharashtra' },{ name: 'tc' },{ name: 'gap' },{ name: 'medical' },{ name: 'studentantirag' },{ name: 'parentantirag' },{ name: 'josaareceipt' },{ name: 'institutefee' },{ name: 'undertaking' }])

//   module.exports = uploadMultiple;