import React from "react";
import Form from "react-bootstrap/Form";

function Size({ sizes }) {
  return (
    <div className="size">
      <p>Choose a size</p>
      <div key={`inline-radio`}>
        {sizes?.map((item, index) => {
          return (
            <Form.Check
              inline
              label={item}
              key={index}
              name="group1"
              type="radio"
              id={`inline-radio-1`}
              className="size-option"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Size;
