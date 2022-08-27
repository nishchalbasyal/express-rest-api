const express = require("express");
const students = require('../data/data')
const {  getAllStudents,
    getSingleStudents,
    createStudents,
    updateStudent,
    deleteStudent   } = require('../controller/studentController')

const router = express.Router();


router.route('/').get((req,res)=>{
    res.send('Hello World')
});




// router.get('/api/students',(req,res)=>{
//     res.send(students);

// })


// router.route('/api/students').get((req,res)=>{
//    res.send(students);
// })




router.route('/api/students').get(getAllStudents);

router.route('/api/students/:id').get(getSingleStudents)

router.route('/api/students').post(createStudents)

router.route('/api/students/:id').put(updateStudent)

router.route('/api/students/:id').delete(deleteStudent)





module.exports = router;
 