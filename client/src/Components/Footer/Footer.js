import React from "react";

function Footer(props) {
  return (
    <footer
      style={{ bottom: "0", height: "50px" }}
      className="d-flex align-items-center w-100 text-secondary bg-dark"
    >
      <div className="container-fluid">
        <p>
          <strong>All rights reserved @SantyRaab Inc 2001-2022</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
