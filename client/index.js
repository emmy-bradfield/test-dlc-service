const TESTBTN = document.querySelector("#test");

const sendUpdate = async() => {
console.log("clicked");
  let updateTest = {
    _id: 21056,
    forename: "Test",
    surname: "User",
    email: "test.user@test.com",
    course: "testing",
    RAG: "GREEN",
    DLC: {
      _id: 21303,
      name: "Emily Bradfield",
      email: "emmybradfield@hotmail.co.uk"
    },
    employer: {
      _id: 29986,
      company: "Test",
      contact_name: "Test",
      contact_email: "test.employer@test.org"
    },
    FS_exam: false,
    at_risk: false,
    gateway: false,
    learner_support: true,
    on_track: 12,
    activities: [{
      _id: "A1.1",
      href: "https://www.github.com",
      complete: true,
      status: "complete",
      due: 2022-11-29,
      submissions: 1,
      portfolio: false
    },
    {
      _id: "A1.2",
      href: "www.fakeurl.com",
      complete: false,
      status: "in-progress",
      due: 2022-12-06,
      submissions: 0,
      portfolio: false
    }]
  };
  console.log(updateTest);
  await axios.post("/learners/new-learner", updateTest).then(res => console.log(res)).catch((err) => console.log(err));
};

TESTBTN.addEventListener("click", sendUpdate);
