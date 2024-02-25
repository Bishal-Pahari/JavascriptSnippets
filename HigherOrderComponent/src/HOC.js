import React, { useState } from "react";

const HOC = (OriginalComponent) => {
  const NewComponent = () => {
    const [money, setMoney] = useState(1000);
    const handleChange = () => {
      setMoney(money + 100);
    };
    return <OriginalComponent money={money} handleChange={handleChange} />;
  };
  return NewComponent;
};

export default HOC;
