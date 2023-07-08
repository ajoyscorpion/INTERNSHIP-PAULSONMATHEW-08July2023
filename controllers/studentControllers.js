const Students = require("../models/studentsSchema")

// logic to create a new student 

exports.newStudent = async (req, res) => {
    try {
      const student = new Students(req.body);
      await student.save();
      res.status(201).json(student);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create student' });
    }
  };


// logic to delete a student
exports.deleteStudent = async (req, res) => {
    try {
      const student = await Students.findByIdAndDelete(req.params.id);
      res.json(student);
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete student' });
    }
  }


//get all sudents in a class
exports.allStudents = async (req, res) => {
  try {
    const students = await Students.find({ classId: req.params.classId });
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get students' });
  }
}


// logic to get all students in standard

exports.studentsStandard = async (req, res) => {
  try {
    const students = await Students.find()
      .populate('classId')
      .exec((err, students) => {
        const filteredStudents = students.filter(
          (student) => student.classId.standard === req.params.standard
        );
        res.json(filteredStudents);
      });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get students' });
  }
}


// logic to update students class
exports.studentsClass = async (req, res) => {
  try {
    const studentId = req.params.id;
    const newClassId = req.body.classId;

    const student = await Students.findById(studentId);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    else{
      student.classId = newClassId;
    await student.save();
    res.json(student);
    } 
  } catch (error) {
    res.status(500).json({ error: 'Failed to update student' });
  }
}