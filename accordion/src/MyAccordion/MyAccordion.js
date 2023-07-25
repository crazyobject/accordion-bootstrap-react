import React from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyAccordion.css";

const MyAccordion = (props) => {
  const { width, items } = props;

  return (
    <div>
      {items.length > 0 ? (
        <Accordion style={{ width: width }} data-testid="MyAccordion">
          {items.map((item, key) => {
            return (
              <Accordion.Item eventKey={key} key={key}>
                <Accordion.Header data-testid="toggleButton">
                  {item.header}
                </Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      ) : (
        <div>No accordion data</div>
      )}
    </div>
  );
};

export default MyAccordion;
