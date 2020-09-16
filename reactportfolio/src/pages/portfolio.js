import React from "react";
import Jumbotron from "../../components/Jumbotron";
import screenshot from "../assets/screenshot";
import screenshot2 from "../assets/screenshot2";
import stupod from "../assets/stupod"

function Portfolio() {
  return (
    <div className="bg-secondary">
     
          <Jumbotron>
          <h1>Github Projects</h1>
            <p className="lead text-muted">
              Some of my better works
            </p>
        
        <hr></hr>
     
        <main>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li className="bg-secondary" data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li className="bg-secondary" data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li className="bg-secondary" data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <a className="nav-link" href="https://github.com/reptile18/Purple-Pages">
                  <img border="0" alt="proj1" src={screenshot}/>
                </a>

                <div className="carousel-caption d-none d-md-block">
                  <h5>Purple Pages</h5>
                  <p>
                    An app that lets you know where to find your favorite shows and sports
                    <a className="nav-link" href="https://github.com/reptile18/Purple-Pages">
                      Github repository{" "}
                    </a>
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <a className="nav-link" href="https://github.com/larsonniall/week5homework.git">
                  <img border="0" alt="proj2" src={screenshot2}/>
                </a>
                <div className="carousel-caption d-none d-md-block text-dark">
                  <h5>Workday Planner</h5>
                  <p>
                    A day planner to keep you organized
                    <a className="nav-link" href="https://github.com/larsonniall/week5homework.git">
                      Github repository{" "}
                    </a>
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <a className="nav-link" href="https://github.com/Sanderschhun/project2.git">
                  <img border="0" alt="proj3" src={stupod}/>
                </a>
                <div className="carousel-caption d-none d-md-block text-dark">
                  <h5>Reverse Yelp</h5>
                  <p>
                    An app that lets you rate and review customers
                    <a className="nav-link" href="https://github.com/Sanderschhun/project2.git">
                      Github repository{" "}
                    </a>
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <a className="nav-link" href="https://github.com/larsonniall/gameApp.git">
                  <img border="0" alt="proj4" src={stupod}/>
                </a>
                <div className="carousel-caption d-none d-md-block text-dark">
                  <h5>Bored Games</h5>
                  <p>
                    A game app that tries to keep you busy and occupied
                    <a className="nav-link" href="https://github.com/larsonniall/gameApp.git">
                      Github repository{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <br />
        </main>
        </Jumbotron>
    </div>
  );
}
export default Portfolio;