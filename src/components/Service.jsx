import { BsCodeSlash, BsFillLightbulbFill, BsPhoneFill } from "react-icons/bs";

const Service = () => {
  return (
    <div>
      {/* services */}
      <div className="services mx-3">
        <div className="container-lg">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="project-title text-center mb-5">
                <h2 className=" fw-bold text-success">
                  I active in these fields!
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-3 col-md-6">
              <div className="project-item bg-white p-4 shadow rounded">
                <div className="fw-bold text-center text-danger fs-2 py-2">
                  <BsCodeSlash />
                </div>
                <h3 className=" fs-5 py-2 text-center">Web Development</h3>
                <p className=" text-muted">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestiae eaque soluta necessitatibus, sequi in asperiores
                  voluptas officia explicabo, similique.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-3 col-md-6">
              <div className="project-item bg-white p-4 shadow rounded">
                <div className="fw-bold text-center text-danger fs-2 py-2">
                  <BsFillLightbulbFill />
                </div>
                <h3 className=" fs-5 py-2 text-center">Creative Idea</h3>
                <p className=" text-muted">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugiat doloremque aliquam ratione? Ab debitis reprehenderit
                  nihil quisquam earum pariatur nemo!
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-3 col-md-6">
              <div className="project-item bg-white p-4 shadow rounded">
                <div className=" fw-bold text-center text-danger fs-2 py-2">
                  <BsPhoneFill />
                </div>
                <h3 className=" fs-5 py-2 text-center">Photoshop</h3>
                <p className=" text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae quos vitae tempora quia, officia beatae accusantium
                  facere similique hic dolorem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* projects */}
      <div className=" projects mx-5 mb-5 text-center" id="projects">
        <div className=" container-lg mt-5">
          <div className=" row justify-content-center">
            <div className=" col-lg-8">
              <div className=" project-title text-center mb-5"></div>
              <h2 className=" fw-bold">Latest Projects</h2>
            </div>
          </div>
        </div>
      </div>
      <div className=" row m-5">
        <div className=" col-lg-4 col-md-6 mb-3">
          <div className=" ">
            <img
              src="https://i.pinimg.com/236x/3f/13/3c/3f133c1167539d7f4d19c890d70d320d.jpg"
              className=" w-100 img-thumbnail shadow-sm"
              style={{ height: "250px" }}
            />
            <h3>Admin Dashboard</h3>
            <p>
              <a href="#" className=" text-danger text-decoration-none">
                Live Demon
              </a>
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-3">
          <div className="">
            <img
              src="https://i.pinimg.com/236x/cf/e4/f2/cfe4f26de889b100679d181747bc7c01.jpg"
              className=" w-100 img-thumbnail shadow-sm"
              style={{ height: "250px" }}
            />
            <h3>Admin Dashboard</h3>
            <p>
              <a href="#" className=" text-danger text-decoration-none">
                Live Demon
              </a>
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-3">
          <div className=" ">
            <img
              src="https://i.pinimg.com/736x/57/49/b7/5749b7d1c88dfc386fc425adf73bf870.jpg"
              className=" w-100 img-thumbnail shadow-sm"
              style={{ height: "250px" }}
            />
            <h3>Admin Dashboard</h3>
            <p>
              <a href="#" className=" text-danger text-decoration-none">
                Live Demon
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
