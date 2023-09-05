const mongoose = require("mongoose")

const subjectSchema = mongoose.Schema({
    subjectName: {
        type: String,
        required: [true, "Please add a subject name"]
    },
    subjectCode: {
        type: String,
        required: [true, "Please add a subject code"]
    },
    subjectDescription: {
        type: String,
        required: [true, "Please add a subject description"]
    },
    subjectLesson: {
        type: Array,
        required: [true, "Please add a lesson"]
    }

})