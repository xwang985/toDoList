import React, { useRef } from "react";

const AddItem = ({ updateList }) => {
  const inputRef = useRef();

  const handleClick = e => {
    e.preventDefault();

    const dataToSubmit = inputRef.current.value;
    if (dataToSubmit) {
      updateList(dataToSubmit);
      inputRef.current.value = "";
    }
  };

  return (
    <form className="input" onClick={handleClick}>
      <input
        className="itemInput"
        ref={inputRef}
        type="text"
        placeholder="Add item"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddItem;
