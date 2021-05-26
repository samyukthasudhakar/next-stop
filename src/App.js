import "./styles.css";
import { useState } from "react";

const tamilFilms = {
  kaithi: "4.5/5",
  asuran: "5/5",
  aadukalam: "5/5"
};
const malayalamFilms = {
  Anandam: "5/5",
  June: "4.5/5",
  Premam: "4/5"
};
const teluguFilms = {
  Fidaa: "5/5",
  Majli: "4/5",
  middleClassMelodies: "2/5"
};

export default function App() {
  const [dictionary, setDicitionary] = useState({});
  const [generate, setGenerate] = useState([]);

  function onClickHandler(language) {
    if (language === "tamil") {
      setDicitionary(tamilFilms);
      setGenerate(Object.keys(tamilFilms));
    } else if (language === "malayalam") {
      setDicitionary(malayalamFilms);
      setGenerate(Object.keys(malayalamFilms));
    } else {
      setDicitionary(teluguFilms);
      setGenerate(Object.keys(teluguFilms));
    }
  }
  return (
    <div className="App">
      <h3>
        <span>🍿</span>movie recommender
      </h3>
      <small>
        Checkout my favorite films. Select a language to get started
      </small>
      <hr />
      <button onClick={() => onClickHandler("tamil")}>Tamil</button>
      <button onClick={() => onClickHandler("malayalam")}>Malayalam</button>
      <button onClick={() => onClickHandler("telugu")}>Telugu</button>
      <ul>
        {generate.map((item) => (
          <li>
            {item}
            <span>{dictionary[item]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
