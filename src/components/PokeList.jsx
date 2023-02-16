import React from "react";

const PokeList = ({ id, image, name, type, weaknesses }) => {
  const style = type[0] + " pokemon-container";
  return (
    <div className={style}>
      <div className="number">
        <small>#{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <p>
          <strong>Type:</strong>
        </p>
        <p className="type-container">
          {type.map((e, index) => {
            return (
              <span id={e} key={index}>
                {e}{" "}
              </span>
            );
          })}
        </p>
        <p>
          <strong>Weaknesses:</strong>
        </p>
        <p className="weakness-container">
          {weaknesses.map((e, index) => {
            return (
              <span className={e} key={index}>
                {e}{" "}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default PokeList;
