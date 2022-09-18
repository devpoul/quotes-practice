import { useState } from "react";
import "./styles/App.css";
import quotes from "./json/quotes.json";
import QuoteBox from "./components/QuoteBox";
import color from "./utils/color";

function App() {
  /* Esta función me calcula un índice random */
  const getIndexRandom = (arr) => Math.floor(Math.random() * arr.length);

  /* Muestra un índice random del arreglo principal del quotes.json el color de color.js */
  const firstQuote = quotes[getIndexRandom(quotes)];
  const firstColor = color[getIndexRandom(color)];

  /* utilizo una prop que se enlaza con QuoteBox.jsx */
  const [randomQuote, setRandomQuote] = useState(firstQuote);
  const [randomColor, setRandomColor] = useState(firstColor);

  const backgroundPrincipal = { backgroundColor: randomColor };

  /* Esta función toma tanto un quote como un color */
  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)]);
    setRandomColor(color[getIndexRandom(color)]);
  };

  return (
    <div style={backgroundPrincipal} className="App">
      <div className="box">
        <QuoteBox
          randomQuote={randomQuote}
          randomColor={randomColor}
          getRandomAll={getRandomAll}
        />
      </div>
    </div>
  );
}

export default App;
