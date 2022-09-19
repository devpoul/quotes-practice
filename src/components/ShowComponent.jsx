import React from "react";

const ShowComponent = (randomQuote) => {
  return (
    <div className="componentImg">
      <h2 className="titleImg">imagen del autor</h2>
      {/* <img className="cardImg" src={randomQuote.img} alt="img" /> */}
      <img
        className="imgAuthor"
        src="https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisaje.jpg"
        alt="imgDoom"
      />
    </div>
  );
};

export default ShowComponent;
