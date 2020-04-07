import React from "react";
import styled from "styled-components";

const ListItems = ({ items, removeItem, finishItem }) => {
  const handleRemove = e => {
    const item = e.target.getAttribute("key-value");
    removeItem(item);
  };

  const handleFinish = e => {
    const item = e.target.getAttribute("key-value");
    finishItem(item);
  };

  const displayList = () =>
    items.map(item => (
      <div className="singleItem" key={item.value}>
        <ListItem done={item.done}>
          <span onClick={handleFinish} key-value={item.value}>
            &#10004;
          </span>
          {item.value}
        </ListItem>
        <button type="button" onClick={handleRemove} key-value={item.value}>
          Remove
        </button>
      </div>
    ));

  return (
    <div className="listItems">
      <div className="items">{displayList()}</div>
    </div>
  );
};

export default ListItems;

const ListItem = styled.div`
  text-decoration: ${props => (props.done ? "line-through" : "none")};
  color: ${props => (props.done ? "red" : "black")};
  text-transform: uppercase;
  margin: auto;
  text-align: left;
  flex: 1;
`;
