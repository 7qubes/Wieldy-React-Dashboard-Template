import React from "react";

const AddBOM = ({ onAddNewHandler }) => {
  console.log(onAddNewHandler);
  return (
    <div>
      <h3>We are inside the component</h3>
      <button onClick={onAddNewHandler}>Click Me</button>
    </div>
  );
};

export default AddBOM;
