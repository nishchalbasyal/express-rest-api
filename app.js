const student = require('./Router/router');
const students = require('./data/data');
const express = require('express');
const app = express();
 
app.use(express.json());
// app.use('/api/students',student);
app.use(student);
// app.use('/api/students',students);

 


//PORT
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is Listening At ${port}...`)
});