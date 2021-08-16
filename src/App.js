import "./styles.css";
import { useState } from "react";

const adventure = {
  Kodanad: ["⭐⭐⭐⭐/⭐⭐⭐⭐⭐", "kodanad.jpg", "#DCFFFB"],
  Gokharna: ["⭐⭐⭐/⭐⭐⭐⭐⭐", "gokarna.jpg", "#DCFFFB"],
  Bandipur: ["⭐⭐⭐⭐/⭐⭐⭐⭐⭐", "bandipur.jpg", "#DCFFFB"]
};
const heritage = {
  Tanjaore: ["⭐⭐⭐⭐⭐/⭐⭐⭐⭐⭐", "tanjaore.jpg", "#EEC4B6"],
  Mahabalipuram: ["⭐⭐⭐⭐/⭐⭐⭐⭐⭐", "mahabalipuram.jpg", "#EEC4B6"],
  Belur: ["⭐⭐⭐⭐⭐/⭐⭐⭐⭐⭐", "bellur.jpg", "#EEC4B6"]
};
const nature = {
  Allepy: ["⭐⭐⭐⭐/⭐⭐⭐⭐⭐", "allepy.jpg", "#DEFDE0"],
  Pollachi: ["⭐⭐⭐⭐/⭐⭐⭐⭐⭐", "pollachi.jpg", "#DEFDE0"],
  Ooty: ["⭐⭐⭐⭐⭐/⭐⭐⭐⭐⭐", "ooty.jpg", "#DEFDE0"]
};

export default function App() {
  const [dictionary, setDicitionary] = useState({});
  const [generate, setGenerate] = useState([]);

  function onClickHandler(category) {
    if (category === "adventure") {
      setDicitionary(adventure);
      setGenerate(Object.keys(adventure));
    } else if (category === "heritage") {
      setDicitionary(heritage);
      setGenerate(Object.keys(heritage));
    } else {
      setDicitionary(nature);
      setGenerate(Object.keys(nature));
    }
  }
  return (
    <div className="App">
      <h2>Next Stop⛺</h2>
      <span>
        Planning your next trip ? Check out the following places to visit !
      </span>

      <button class="adventure" onClick={() => onClickHandler("adventure")}>
        Adventure
      </button>
      <button class="heritage" onClick={() => onClickHandler("heritage")}>
        Heritage
      </button>
      <button class="nature" onClick={() => onClickHandler("nature")}>
        Nature
      </button>

      <ul>
        {generate.map((item) => (
          <li style={{ backgroundColor: dictionary[item][2] }}>
            <img src={dictionary[item][1]} alt={item} />
            <div class="container">
              Place : {item}
              <span>Rating : {dictionary[item][0]}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
