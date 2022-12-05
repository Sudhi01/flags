import { useState } from "react";
import "./styles.css";

var flagDictionary = {
  " 🇮🇳": "India ",

  " 🇺🇸": "USA",
  " 🇬🇧": "UnitedKingdom",
  " 🇪🇸": "Spain",
  "  🇲🇽": "Mexico"
};

var flags = Object.keys(flagDictionary);

export default function App() {
  const [meaning, setMeaning] = useState(" ");

  function clickhandler(emoji) {
    var meaning = flagDictionary[emoji];
    setMeaning(meaning);
  }
  function emojihandler(event) {
    var userInput = event.target.value;
    var meaning = flagDictionary[userInput];
    if (meaning === undefined) {
      meaning = "try with other flag";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>FLAG </h1>
      <input onChange={emojihandler} />
      <h2> {meaning} </h2>
      <h3> click on flags </h3>
      {flags.map(function (emoji) {
        return (
          <span
            onClick={() => clickhandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
