import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" container-lg-fluid">
      <nav className="navbar navbar-expand-lg bg-light shadow-sm sticky-top mb-5 ">
        <div className="container">
          <Link to="/" className=" navbar text-danger text-decoration-none">
            {" "}
            My Portfolio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item me-2 ms-3">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-danger nav-link text-white rounded"
                      : "nav-link text-danger"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item me-2">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-danger nav-link text-white rounded"
                      : "nav-link text-danger"
                  }
                >
                  About Me
                </NavLink>
              </li>
              <li className="nav-item me-2">
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-danger nav-link text-white rounded"
                      : "nav-link text-danger"
                  }
                >
                  Services & Projects
                </NavLink>
              </li>
              <li className="nav-item me-2">
                <NavLink
                  to="/member"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-danger nav-link text-white rounded"
                      : "nav-link text-danger"
                  }
                >
                  Members
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-danger nav-link text-white rounded"
                      : "nav-link text-danger"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
