const mongoose = require('mongoose')

const classSchema = mongoose.Schema({
    standard: {
        type:Number,
        require:true
    },
    division: {
        type:String,
        require:true
    }
});

const Classes = mongoose.model("Classes",classSchema)

module.exports = Classes    