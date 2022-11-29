const MONGOOSE = require("mongoose");
const {Schema, model} = MONGOOSE;

const dlcSchema = new Schema({
    _id: Number,
    name: String,
    email: String
});

const employerSchema = new Schema({
    _id: Number,
    company: String,
    contact_name: String,
    contact_email: String
});

const activitySchema = new Schema({
    _id: String,
    href: String,
    complete: Boolean,
    status: String,
    due: Date,
    submissions: Number,
    portfolio: Boolean
});

const learnerSchema = new Schema({
    _id: Number,
    name: String,
    email: String,
    course: String,
    RAG: String,
    DLC: [dlcSchema],
    employer: [employerSchema],
    FS_exam: Boolean,
    at_risk: Boolean,
    gateway: Boolean,
    learner_support: Boolean,
    on_track: Number,
    activities: [activitySchema]
})

const Learner = model('Learner', learnerSchema);
module.exports = {"Learner": Learner};