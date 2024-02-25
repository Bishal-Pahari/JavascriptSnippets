import React from "react";
import HOC from "../HOC";

const Person2 = ({ money, handleChange }) => {
  return (
    <div>
      <p>Person 2 bids $ {money}</p>
      <button onClick={handleChange}>Increase Bid</button>
    </div>
  );
};

export default HOC(Person2);
