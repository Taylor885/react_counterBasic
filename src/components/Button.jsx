import React, { useState } from "react";
import { Button } from "react-bootstrap";

const CustomButton = ({ children, onClick }) => {
  //   const [count, setCount] = useState(0);

  return (
    <Button
      variant={children === "+1" ? "success" : "danger"}
      style={{ marginRight: children === "+1" && "1em" }}
      onClick={onClick}
      //   onClick={() => setCount(count + { number })}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
