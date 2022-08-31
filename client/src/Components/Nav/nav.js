import React from "react";
import Dropdown from "react-bootstrap/esm/Dropdown";

function Nav(props) {
  return (
    <div className="w-100 bg-info">
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand fs-3 fw-bold text-primary" href="/">
            Veterinary management
          </a>
          <ul className="nav">
            <li className="nav-item">
              <a
                className="nav-link active fs-5 text-light"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active fs-5 text-light"
                aria-current="page"
                href="#"
              >
                Only patients
              </a>
            </li>
            <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Profile
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item className="fw-bold" href="/action-1">
                    My profile
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="text-danger fw-bold"
                    href="/action-2"
                  >
                    Close account
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
