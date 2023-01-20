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
      style={{ backgroundColor: "white", height: 'calc(100% - 90px)' }}
      className="container-fluid w-100 border border-gray rounded mb-5"
    >
      {patient !== undefined? (
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
