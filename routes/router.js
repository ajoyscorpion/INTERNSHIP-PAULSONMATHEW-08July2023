// import express
const express = require('express')

// create routes, using express.Router() class, object
const router = new express.Router

const studentController = require('../controllers/studentControllers')

const classController = require('../controllers/classControllers')

// add new Student
router.post('/student',studentController.newStudent)

// add classes
router.post('/classes',classController.newClass)

//delete a student
router.delete('/student/:id',studentController.deleteStudent)

//delete a class
router.delete('/class/:id',classController.deleteClass)

//get all sudents in a class
router.get('/classes/:classId/students',studentController.allStudents)

// get all students in a standard
router.get('/students/standard/:standard',studentController.studentsStandard)

// update students class
router.put('/students/:id/class',studentController.studentsClass)

// export router
module.exports = router