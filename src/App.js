import { useEffect, useState } from "react";
import getQuotes from "./services/getQuotes";

function App() {
  const [quote, setQuote] = useState({});
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    setRandomQuote();
  }, []);

  function setRandomQuote() {
    getQuotes().then((data) =>
      setQuote({ date: data.appeared_at, text: data.value })
    );
  }

  function saveQuote() {
    setSavedQuotes([...savedQuotes, quote]);
  }

  return (
    <div className="App">
      <p>{quote.text}</p>
      <button onClick={setRandomQuote}>Talk shit!</button>
      <button onClick={saveQuote}>Save that shit!</button>
      {savedQuotes.map(({ text }) => (
        <p>{text}</p>
      ))}
    </div>
  );
}

export default App;
