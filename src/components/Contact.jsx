import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi"


const Contact = () => {
  return (
    <section className=" contact mt-5 mx-5" id="contact">
        <div className="container-lg">
            <div className="row justify-content-center mb-4">
                <div className="col-lg-8">
                    <div className="section-title text-center">
                        <h2 className="fw-bold">Our Team</h2>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-md-5 d-flex justify-content-center">
                   <div className=" contact-container">
                    <div className="contact-item d-flex mb-3">
                      <div className="text-danger fs-3">
                        <HiPhone/>
                      </div>
                      <div className="text ms-3">
                        <div className=" fs-5">Phone</div>
                        <div className=" text-muted">+959-260630092</div>
                      </div>
                    </div>
                    <div className="contact-item d-flex mb-3">
                      <div className="text-danger fs-3">
                        <HiMail/>
                      </div>
                      <div className="text ms-3">
                        <div className=" fs-5">Email</div>
                        <div className=" text-muted">ptw266309@gmail.com</div>
                      </div>
                    </div>
                    <div className="contact-item d-flex mb-3">
                      <div className="icon text-danger fs-3">
                        <HiLocationMarker/>
                      </div>
                      <div className="text ms-3">
                        <div className=" fs-5">Address</div>
                        <div className=" text-muted">Mandalay</div>
                      </div>
                    </div>
                   </div>
                  </div>
                  <div className="col-md-7">
                <div className="contact-form bg-white shadow-sm">
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <input type="text" placeholder="Your Name" className=" form-control form-control-lg fs-5 border-1 border-light"></input>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <input type="email" placeholder="Email" className=" form-control form-control-lg fs-5 border-1 border-light"></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <input type="text" placeholder="Subject" className=" form-control form-control-lg fs-5 border-1 border-light"></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                       <textarea placeholder="Your Message" cols="30" rows="10" className=" form-control form-control-lg fs-5 border-1 border-light"></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <button className=" btn btn-danger px-3 ms-3">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Contact