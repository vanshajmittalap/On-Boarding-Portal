const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 

// import {v2 as cloudinary} from 'cloudinary';




connectToMongo();
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.use('/api/education', require('./routes/education'))
app.use('/api/document', require('./routes/document'))
app.use('/api/questions', require('./routes/questions'))

app.listen(port, () => {
  console.log(`Backend Started`)
})