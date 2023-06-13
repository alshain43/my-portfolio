
import {BsDiscord, BsFacebook, BsInstagram, BsLinkedin, BsTwitch, BsWhatsapp} from "react-icons/bs";

const About = () => {
  return (
    <div className="py-2 px-3 container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title text-center mb-5">
            <h2 className=" fw-bold" style={{ textDecoration: "underline" }}>
              About Me
            </h2>
          </div>
        </div>
      </div>
      <div className=" row">
        <div className="col-md-6">
          <div className="about-text">
            <h3 className=" fs-3">Freelancer</h3>
          </div>
          <p className=" text-muted">
            Now I am active as freelancer and You can check about me!
          </p>
          <div className="row text-uppercase text-center my-3">
            <div className="col-sm-4">
              <div className="item">
                <h4 className=" fs-1 fw-bold">23+</h4>
                <p className=" text-muted">Project Completed</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="item">
                <h4 className=" fs-1 fw-bold">43+</h4>
                <p className=" text-muted">Happy Clients</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="item">
                <h4 className=" fs-1 fw-bold">63+</h4>
                <p className=" text-muted">Positive Reviews</p>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-lg-12 d-flex align-items-center">
              <a href="#" className=" btn btn-danger px-3 me-5">
                Download CV
              </a>
              <div className="social-link">
                <a href="#" className=" text-decoration-none me-3">
                  <i className=" text-dark">
                    <BsFacebook/>
                  </i>
                </a>
                <a href="#" className=" text-decoration-none me-3">
                  <i className=" text-dark">
                    <BsWhatsapp/>
                  </i>
                </a>
                <a href="#" className=" text-decoration-none me-3">
                  <i className=" text-dark">
                    <BsDiscord/>
                  </i>
                </a>
                <a href="#" className=" text-decoration-none me-3">
                  <i className=" text-dark">
                    <BsLinkedin/>
                  </i>
                </a>
                <a href="#" className=" text-decoration-none me-3">
                  <i className=" text-dark">
                    <BsInstagram/>
                  </i>
                </a>
                <a href="#" className=" text-decoration-none me-3">
                  <i className=" text-dark">
                    <BsTwitch/>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="skill mb-5">
            <h3 className=" fs-6">HTML</h3>
            <div className="progress" style={{ height: "5px" }}>
              <div
                className="progress-bar bg-danger"
                role=" progressbar"
                aria-label=" Example 1px high"
                style={{ width: "90%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
          <div className="skill mb-5">
            <h3 className=" fs-6">CSS</h3>
            <div className="progress" style={{ height: "5px" }}>
              <div
                className="progress-bar bg-danger"
                role=" progressbar"
                aria-label=" Example 1px high"
                style={{ width: "80%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
          <div className="skill mb-5">
            <h3 className=" fs-6">JavaScript</h3>
            <div className="progress" style={{ height: "5px" }}>
              <div
                className="progress-bar bg-danger"
                role=" progressbar"
                aria-label=" Example 1px high"
                style={{ width: "80%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
          <div className="skill mb-5">
            <h3 className=" fs-6">Bootstrap</h3>
            <div className="progress" style={{ height: "5px" }}>
              <div
                className="progress-bar bg-danger"
                role=" progressbar"
                aria-label=" Example 1px high"
                style={{ width: "70%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
          <div className="skill mb-5">
            <h3 className=" fs-6">React</h3>
            <div className="progress" style={{ height: "5px" }}>
              <div
                className="progress-bar bg-danger"
                role=" progressbar"
                aria-label=" Example 1px high"
                style={{ width: "75%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
          <div className="skill mb-5">
            <h3 className=" fs-6">Python</h3>
            <div className="progress" style={{ height: "5px" }}>
              <div
                className="progress-bar bg-danger"
                role=" progressbar"
                aria-label=" Example 1px high"
                style={{ width: "90%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
