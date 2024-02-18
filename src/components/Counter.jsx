import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: "4rem" }}>
      <h1>{count}</h1>
      <Button
        variant="success"
        style={{ marginRight: "1rem" }}
        onClick={() => setCount(count + 1)}
      >
        +1
      </Button>
      <Button variant="danger" onClick={() => setCount(count - 1)}>
        -1
      </Button>
    </div>
  );
};

export default Counter;
