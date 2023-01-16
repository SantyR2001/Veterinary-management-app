import React from "react";

function LoginTitle({
  title = `Sign in and`,
  blueTitle = "Manage your patients",
}) {
  return (
    <div className="d-flex h-100 align-items-center">
      <h1 className="text-center">
        {" "}
        {title} <strong className="text-primary"> {blueTitle} </strong>{" "}
      </h1>
    </div>
  );
}

export default LoginTitle;
