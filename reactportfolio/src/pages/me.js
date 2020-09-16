import React from "react";
import Jumbotron from "../components/jumbotron"
import resume from "../assets/Resume"

function AboutMe() {
  return (
    <div >
      <Jumbotron>
      {/* fix layout to be a card like original */}
      <div className=" text-center">
        <h1>About Me</h1>
        <p className="lead text-muted">
          My goal as a web developer right now is to try to be 1% less worse every day.
        </p>
      </div>
      <hr></hr>

      <div className="card-body bg-secondary">

        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
          Click here to view my resume
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  My Resume
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <embed src={resume} type="application/pdf" width="100%" height="100%"/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">My Github profile</h2>
              <p className="lead">
                My rough work that I'm looking forward to updating.
              </p>
              <a className="nav-link" href="https://github.com/larsonniall">
                <img className="ml-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ei-sc-github.svg/768px-Ei-sc-github.svg.png" alt="github logo" width="80" height="80"/>
              </a>
            </div>
          </div>
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">My LinkedIn profile</h2>
              <p className="lead">
                My linkedIn profile is a great way to contact me
              </p>
              <a className="nav-link" href="https://www.linkedin.com/in/nialllarson">
                <img className="ml-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png" alt="linkedIn logo" width="50" height="50"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      </Jumbotron>
    </div>
  );
}

export default AboutMe;