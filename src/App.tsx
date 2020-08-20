import * as React from "react";
import "./styles.css";

export default function App() {
  const [num, setNum] = React.useState<number>(0);
  const [err, setErr] = React.useState<string>("");
  const handleInputElem = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/\D/.test(e.target.value)) {
      setErr("Please enter only numbers");
      return false;
    }
    let val = parseInt(e.target.value, 10);
    setErr("");
    setNum(val);
    return true;
  };

  const renderSelect = () => {
    let tempArr = [];
    tempArr.length = num;
    for (let i = 0; i < num; i++) {
      tempArr.push(i);
    }
    return tempArr.map((index, item) => {
      return (
        <div>
          <label>Select Box {index + 1}</label>{" "}
          <select>
            <option value="a">A</option>
          </select>
        </div>
      );
    });
  };
  return (
    <div className="App">
      <p>
        The app will render as many number of select boxes as entered in the
        text box
      </p>
      <p>{err}</p>
      <label>Enter any number</label>{" "}
      <input type="text" onChange={(e) => handleInputElem(e)} />
      <div>{num > 0 ? renderSelect() : null}</div>
    </div>
  );
}
