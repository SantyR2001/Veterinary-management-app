import React from "react";

function Footer(props) {
  return (
    <div
      style={{ bottom: "0", height: "50px" }}
      className="d-flex align-items-center w-100 text-secondary bg-dark"
    >
      <div className="container-fluid">
        <p>
          <strong>All rights reserved @SantyRaab Inc 2001-2022</strong>
        </p>
      </div>
    </div>
  );
}

export default Footer;
