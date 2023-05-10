import { useState,useEffect} from 'react';

import cross from '../assets/cross.svg'
import tick from '../assets/tick.svg'
import "./Test.scss"

const TestPage = () => {

  let [values, setValues] = useState([true, true, true, true, true, true, true, true, true, true])
  let labels = [
    "brocarts",
    "rorcarts",
    "borcarts",
    "broarcts",
    "broctsca",
    "bortarts",
    "borortss",
    "borrcart",
    "orbartsb",
    "brocarts"
  ]

  useEffect(() => {
    let newValues = [...values];
    for (let i = 0; i < 3; i++) {
      newValues[Math.floor(Math.random() * 9) + 0] = false;
    }
    setValues(newValues);
  }, [])

 return (
    <div class="test">
      <ul>
        {
          values.map((value, index) => <li>
            <img src={value ? tick : cross} width="32px"/>
            &nbsp; {labels[index]}
          </li>)
        }
      </ul>
    </div>
 );
};

export default TestPage;