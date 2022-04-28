const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 



connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())


// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.use('/api/education', require('./routes/education'))
app.use('/api/document', require('./routes/document'))
app.use('/api/questions', require('./routes/questions'))

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})