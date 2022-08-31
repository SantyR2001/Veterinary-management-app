import React from "react";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import { MdPets } from "react-icons/md";
import {} from "react-icons/fa";
import { Button, ButtonGroup } from "react-bootstrap";

function ListItem({ patient }) {
  return (
    <AccordionItem>
      <AccordionHeader className="w-100 d-flex">
        <h4 className="fw-bold fs-3 text-primary m-2">
          {" "}
          <MdPets /> {patient.pet}
        </h4>
      </AccordionHeader>
      <AccordionBody>
        <div>
          <ul className="List-group px-0 pb-3">
            <li className="list-group-item">
              <strong className="text-primary">Owner: </strong> {patient.owner}
            </li>
            <li className="list-group-item">
              <strong className="text-primary">Owner email: </strong>{" "}
              {patient.email}
            </li>
            <li className="list-group-item">
              <strong className="text-primary">Discharge date: </strong>{" "}
              {patient.date}
            </li>
            <li className="list-group-item">
              <strong className="text-primary">Symptoms: </strong>{" "}
              {patient.symptoms}
            </li>
            <li className="list-group-item">
              <div className="mt-1">
                <Button className="float-start" variant="primary">
                  Edit
                </Button>
                <Button className="float-end" variant="danger">
                  Delete
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </AccordionBody>
    </AccordionItem>
  );
}

export default ListItem;
