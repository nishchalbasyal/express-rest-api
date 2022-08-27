const students = require('../data/data')

const getAllStudents = async (req,res)=>{
    try {
        return await res.send(students);

    } catch (error) {
        console.log(error);
    }


}



const getSingleStudents = async (req,res)=>{
    try {
        const student = await students.find(c=> c.id === parseInt(req.params.id));
        if(!student) return res.status(404).send("Students Not Found");
        
        res.status(201).send(student)
        
    } catch (error) {

        console.log(error);
        
    }
}

const createStudents = async (req,res)=>{

   

    if(!req.body.name || req.body.name.length<3){
        return res.status(401).send('Name Must Requires and must be At least 3 Char')
    }
 
 
    const student = {
        id: students.length + 1,
        name: req.body.name
    };
 
    await students.push(student);
    res.status(201).send(student);
 
 
 }

 const updateStudent = async (req,res)=>{
    const student = await students.find(c=> c.id === parseInt(req.params.id));
    if(!student){
       return res.status(404).send("Students Not Found");
    }
 
 
    if(!req.body.name || req.body.name.length<3){
       return  res.status(401).send('Name Must Requires and must be At least 3 Char')
     }
 
    student.name = req.body.name;
    res.status(201).send(student)
 
 }

 const deleteStudent = async(req,res)=>{

    const student = await students.find(c=> c.id === parseInt(req.params.id));
    // console.log(student)
    if(!student)return res.status(404).send("Students Not Found");

    const index = await students.indexOf(student);
    students.splice(index,1); //at postion index remove one items
    res.status(201).send(student)


}


module.exports = {
    
    getAllStudents,
    getSingleStudents,
    createStudents,
    updateStudent,
    deleteStudent               


};