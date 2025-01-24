const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose');
const cors = require('cors'); 

require('dotenv').config();
const UserRoute = require('./routes/user');
const ClassRoute = require('./routes/class');
const SubjectRoute = require('./routes/subject');
const User = require('./models/user');
const dbConnect = require('./db/connection');



console.log('Registering routes...');
app.use('/', UserRoute);
console.log('Routes registered successfully!');

dbConnect()


app.use(express.json())
app.use(cors())
// app.use('/',userRoute)
app.use(ClassRoute)
app.use(SubjectRoute)


app.listen(port, () =>{
  console.log(`Example app listening on port ${port}`)
})