const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mis:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    mobileparent:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    birth:{
        type: String,
        required: true
    },
    mothername:{
        type: String,
        required: true
    },
    fathername:{
        type: String,
        required: true
    },
    cast:{
        type: String,
        required: true
    },
    religion:{
        type: String,
        required: true
    },
    seat:{
        type: String,
        required: true
    },
    admission:{
        type: String,
        required: true
    },
    institute:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
  });

  module.exports = mongoose.model('notes', NotesSchema);