const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add a user name"]
    },
    email: {
        type: String,
        required: [true, "Please add an email address"],
        unique: [true, "Email address is existing"]
    },
    password: {
        type: String,
        required: [true, "Please add a password"]
    },
    firstName: {
        type: String,
        required: [true, "Please add a first name"]
    },
    middleName: {
        type: String,
        required: [false]
    },
    lastName: {
        type: String,
        required: [true, "Please add a last name"]
    },
    age: {
        type: Number,
        required: [true, "Please add an age"]
    },
    sex: {
        type: String,
        required: [true, "Please select a sex"]
    },
    role: {
        type: String,
        enum: ["admin", "student", "teacher"],
        required: [true, "Please select a role"]
    },
    grLvl: {
        type: String,
    },
    section: {
        type: String,
    },
    subjects: {
        type: Array,
        required: [true, "Please select subjects"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Student", studentSchema)