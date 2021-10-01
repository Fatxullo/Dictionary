import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Inputstyle,
  Linktext,
  Positionstyle,
  Transstyle,
  Wrapperstyle,
} from "./style";

function Translator() {
  const [state, setstate] = useState([]);

  const getDictionary = (e) => {
    const selectValue = document.getElementById("select").value;
    const apiKey =
      "dict.1.1.20210915T143839Z.96e17f7f60ad28d4.e1bf52d3b734ee95be20a7e82dfe268e2601fce7";
    axios
      .get(
        `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${apiKey}&lang=${selectValue}&text=${e.target.value}`
      )
      .then((res) => {
        console.log(res.data);
        setstate(res.data.def);
      })

      .catch();
  };

  useEffect(() => {

  }, []);
  return (
    <Wrapperstyle>
      <Inputstyle>
        <Positionstyle>
          <textarea
            onChange={getDictionary}
            placeholder="Type something to translate"
            name="translate_word"
            id="textarea"
            autoFocus
          ></textarea>
        </Positionstyle>
        <Linktext>
          Powered by <a href="https://yandex.com/dev/dictionary/">Yandex</a>
        </Linktext>
      </Inputstyle>
      <select id="select" defaultValue="en-ru" name="select">
        <option value="ru-ru">Russian ➞ Russian </option>
        <option value="ru-en">Russian ➞ English </option>
        <option value="ru-pl">Russian ➞ Polandish </option>
        <option value="ru-uk">Russian ➞ Ukrainian </option>
        <option value="ru-de">Russian ➞ German </option>
        <option value="ru-fr">Russian ➞ French </option>
        <option value="ru-es">Russian ➞ Spanish </option>
        <option value="ru-it">Russian ➞ Italian </option>
        <option value="ru-tr">Russian ➞ Turkish </option>
        <option value="en-ru">English ➞ Russian </option>

      </select>
      <Transstyle>
        <ul>
          {state.map((value) => (
            <ol>
              <b>{value?.text}</b>     [{value?.ts}] {value?.pos}
              {value?.tr.map((item) => (
                <li>
                  <span style={{ color: "blue", marginRight: "10px" }}>{item.text}</span>
                  {item.gen},

                </li>
              ))}
            </ol>
          ))}
        </ul>
      </Transstyle>
    </Wrapperstyle>
  );
}

export default Translator;
