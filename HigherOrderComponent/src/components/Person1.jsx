import React from "react";
import HOC from "../HOC";

const Person1 = ({ money, handleChange }) => {
  return (
    <div>
      <p>Person 1 bids $ {money}</p>
      <button onClick={handleChange}>Increase Bid</button>
    </div>
  );
};

export default HOC(Person1);
