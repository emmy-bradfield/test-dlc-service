const AXIOS = require("axios");
const ROUTER = require("express").Router();
const {Learner} = require("./learnerModel.js");

// create a new learer
ROUTER.route("/learners/new-learner").post((req, res) => {
  let learnerObj = {
    _id: req.body._id,
    name: req.body.forename + " " + req.body.surname,
    email: req.body.email,
    course: req.body.course,
    RAG: req.body.RAG,
    DLC: req.body.DLC,
    employer: req.body.employer,
    FS_exam: req.body.FS_exam,
    at_risk: req.body.at_risk,
    gateway: req.body.gateway,
    learner_support: req.body.learner_support,
    on_track: req.body.on_track,
    activities: req.body.activites
  }
  const LEARNER = new Learner(learnerObj);
  LEARNER.save().then(() => res.json(LEARNER)).catch((err) => res.json(`Error: ${err}`))
});

// read all learners
ROUTER.route("/learners/all").get((req, res) => {
  Learner.find().then(learners => res.json(learners)).catch((err) => res.json(`Error: ${err}`));
});

// read one specific learner
ROUTER.route("/learners/:_id").get((req, res) => {
  Learner.findById(req.params._id).then((learner) => res.json(learner)).catch((err) => res.json(`Error: ${err}`));
});

// find a learner by name
ROUTER.route("/learners/search/:name").get((req, res) => {
  Learner.findOne({"name": req.params.name}).then((learner) => res.json(learner)).catch((err) => res.json{`Error: ${err}`));
});

// update a learner
ROUTER.route("/learner/:_id/update").post((req, res) => {
  let LEARNER_UPDATED = req.body
  Learner.updateOne({"_id":req.params._id}, LEARNER_UPDATED).then(() => res.json(true)).catch((err) => res.json(`Error: ${err}`));
});

// delete a learner
ROUTER.route("/learner/:_id/delete).delete((req, res) => {
  Learner.findByIdAndDelete(res.params._id).then(() => res.json(true)).catch((err) => res.json(`Error: ${err}`));
});

module.exports = ROUTER;