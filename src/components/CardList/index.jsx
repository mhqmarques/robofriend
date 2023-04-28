import React from "react";
import "./index.css"

const CardList = ({ list = [], CardComponent }) => {
  return (
    <section className="grid">
      {list.map((item) => (
        <CardComponent key={item.id} data={item} />
      ))}
    </section>
  );
};

export default CardList;
