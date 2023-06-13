import "react-icons/tb";

const Home = () => {
  return (
    <div className="px-5">
      <div className=" container-lg-fluid mx-5">
        <div className=" row align-items-center align-content-center min-vh-100 mb-3">
          <div className="col-4 col-md-6 mt-3">
            <div className="  text-center">
              <img
                src="https://i.pinimg.com/236x/87/66/fa/8766fa4221c6f047589626aa564c669f.jpg"
                className=" rounded-circle my-image"
                style={{ width: "75%" }}
              />
            </div>
          </div>
          <div className="col-md-3 order-md-first mt-md-0">
            <p className=" text-muted mt-3">Hello I am</p>
            <h1 className=" text-danger fs-1 fw-bold text-uppercase">
              Web Developer
            </h1>
            <h4 className=" fs-3">Phyo Thiri Wai</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              molestias possimus laboriosam debitis adipisci consectetur quasi
              iure maxime sequi iusto, eaque corrupti impedit distinctio cumque!
              Ratione saepe accusantium, voluptas quas dolore temporibus
              veritatis, ab id iste debitis consequuntur quia. Rerum, esse nisi
              cum animi odit accusantium explicabo obcaecati praesentium
              aspernatur iure modi nam ad ducimus iusto qui nihil? Adipisci esse
            </p>
            <a href="#" className=" btn btn-danger px-5">
              My Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
