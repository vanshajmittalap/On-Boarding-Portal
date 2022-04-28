const mongoose = require('mongoose');
const { Schema } = mongoose;

const EducationSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    course:{
        type: String,
        required: true
    },
    branch:{
        type: String,
        required: true
    },
    gradyear:{
        type: String,
        required: true
    },
    jeenumber:{
        type: String,
        required: true
    },
    jee:{
        type: String,
        required: true
    },
    class12:{
        type: String,
        required: true
    },
    board12:{
        type: String,
        required: true
    },
    roll12:{
        type: String,
        required: true
    },
    class10:{
        type: String,
        required: true
    },
    board10:{
        type: String,
        required: true
    },
    roll10:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
  });

  module.exports = mongoose.model('education', EducationSchema);