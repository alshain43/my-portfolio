import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Member = () => {
  return (
    <div>
      <div className="members" id="members">
        <div className=" container-lg mt-5">
          <div className=" row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className=" fw-bold mb-4">Our Team Members</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 d-flex mx-2">
          <div className=" bg-body-tertiary shadow-sm rounded p-5 ms-3 m-1">
            <div className=" d-flex align-items-center">
              <img
                src="https://i.pinimg.com/236x/d1/e3/d2/d1e3d2a12bc3d0221898c4391dffcfff.jpg"
                className=" rounded-circle me-3"
              />
              <div className=" ms-3">
                <h3 className=" fs-5 mb-2">Alshain</h3>
                <p className=" text-muted">Senior Web Developer</p>
                <div className="text-danger">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
              </div>
            </div>
            <p className=" text-muted mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              corporis accusantium blanditiis consequatur hic, aliquam eaque
              ratione ex laboriosam dolor quae porro modi architecto doloremque.
              Soluta dolores perferendis fuga dolorum exercitationem
              perspiciatis suscipit ipsum?
            </p>
          </div>
          <div className=" bg-body-tertiary shadow-sm rounded p-5 m-1">
            <div className=" d-flex align-items-center">
              <img
                src="https://i.pinimg.com/236x/b2/fc/f7/b2fcf7e224c95da3197b308de719bd46.jpg"
                className=" rounded-circle me-3"
              />
              <div className=" ms-3">
                <h3 className=" fs-5 mb-2">Flora</h3>
                <p className=" text-muted">Junior Web Developer</p>
                <div className="text-danger">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
              </div>
            </div>
            <p className=" text-muted mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              corporis accusantium blanditiis consequatur hic, aliquam eaque
              ratione ex laboriosam dolor quae porro modi architecto doloremque.
              Soluta dolores perferendis fuga dolorum exercitationem
              perspiciatis suscipit ipsum?
            </p>
          </div>
          <div className="bg-body-tertiary shadow-sm rounded p-5 m-1">
            <div className=" d-flex align-items-center">
              <img
                src="https://i.pinimg.com/236x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg"
                className=" rounded-circle me-3"
              />
              <div className=" ms-3">
                <h3 className=" fs-5 mb-2">Aura</h3>
                <p className=" text-muted">Frontend Developer</p>
                <div className="text-danger">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </div>
              </div>
            </div>
            <p className=" text-muted mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              corporis accusantium blanditiis consequatur hic, aliquam eaque
              ratione ex laboriosam dolor quae porro modi architecto doloremque.
              Soluta dolores perferendis fuga dolorum exercitationem
              perspiciatis suscipit ipsum?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
