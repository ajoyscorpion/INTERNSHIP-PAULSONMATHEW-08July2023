const mongoose = require('mongoose')

const studentsSchema = mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    rollNo: {
        type:Number,
        require:true
    },
    mobileNo: {
        type:Number,
        require:true
    },
    classId: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'Class' 
    }
});

const Students = mongoose.model("Students",studentsSchema)

module.exports = Students