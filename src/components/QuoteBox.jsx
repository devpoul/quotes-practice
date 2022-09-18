import React from "react";

/* destructuring de llaves, coloco el mismo nombre con lo que estaba en la constante de App.jsx */
const QuoteBox = ({ randomQuote, randomColor, getRandomAll }) => {
  const colorLetter = { color: randomColor };
  const bgGenerate = { backgroundColor: randomColor };
  return (
    <article style={colorLetter} className="card">
      <p className="card-quote">"{randomQuote.quote}"</p>
      <h1 className="card-author">{randomQuote.author}</h1>
      <button style={bgGenerate} className="card-btn" onClick={getRandomAll}>
        ▶
      </button>
    </article>
  );
};

export default QuoteBox;
