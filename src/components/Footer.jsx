
import { TbArrowBigUpLineFilled } from "react-icons/tb";

// eslint-disable-next-line react/prop-types
const Footer = ({handleScroll}) => {
  return (
    
        <div className="footer container-lg-fluid">
        <div className="container-fluid container-fluid bg-danger">
          <div className="row py-2">
            <div className="col-lg-12 text-center">
            <TbArrowBigUpLineFilled onClick={handleScroll} className=" fs-2 mb-2"/>
              <p className="text-muted">Copyright @ 2023 All reserved!</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer