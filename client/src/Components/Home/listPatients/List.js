import React from "react";
import { Accordion } from "react-bootstrap";
import ListItem from "./ListItem";

function List({ patients }) {
  const patient = {
    pet: "Spike",
    owner: "Santiago",
    email: "Santiagoraab@gmail.com",
    date: "12 de mayo",
    symptoms: "Vómitos",
  };
  return (
    <div
      style={{ backgroundColor: "white" }}
      className="container-fluid p-2 w-100 h-auto border border-gray rounded"
    >
      {typeof patients !== undefined ? (
        <Accordion className="border border-primary rounded my-2">
          <ListItem patient={patient} />
        </Accordion>
      ) : (
        <p className="mt-4 fs-5 fw-bold text-secondary"> No patients yet... </p>
      )}
    </div>
  );
}

export default List;
