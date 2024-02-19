import React, { useState } from "react";
import CustomButton from "./Button";
import Count from "./Count";

const Counter = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };
  const subtractOne = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ marginTop: "4rem" }}>
      <Count count={count} />
      <CustomButton
        // variant="success"
        // style={{ marginRight: "1em" }}
        onClick={addOne}
      >
        +1
      </CustomButton>
      <CustomButton onClick={subtractOne}>-1</CustomButton>
      {/* <Button
        variant="success"
        style={{ marginRight: "1rem" }}
        onClick={() => setCount(count + 1)}
      >
        +1
      </Button>
      <Button variant="danger" onClick={() => setCount(count - 1)}>
        -1
      </Button> */}
    </div>
  );
};

export default Counter;
