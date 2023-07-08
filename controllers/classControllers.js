const Classes = require('../models/classSchema')


// logic to add new class
exports.newClass = async (req, res) => {
    try {
      const classObj = new Classes(req.body);
      await classObj.save();
      res.status(201).json(classObj);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create class' });
    }
  };


// logic to delete a class
exports.deleteClass = async (req, res) => {
    try {
      const classObj = await Classes.findByIdAndDelete(req.params.id);
      res.json(classObj);
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete class' });
    }
  } 