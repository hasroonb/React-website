import React from "react";
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {/* <nav>
          <ul>
          <li>
              <Link to="/">Navbar</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/Nopage">NoPage</Link>
            </li>
            <li>
            <Link   to="/About">About</Link>
            </li>
          </ul>
        </nav> */}

      {/* Bootstrap------------------ */}
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ color: "#e3f2fd;" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Nopage">
                  NoPage
                </Link>
              </li>
           
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-success" type="signup" to="/SignUp">
                SignUp
              </button>
            </form>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};
export default Navbar;
