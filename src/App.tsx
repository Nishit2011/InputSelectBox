import * as React  from "react";
import "./styles.css";

export default function App() {
  const [num, setNum] = React.useState<number>(0);
  const handleInputElem = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setNum(parseInt(e.target.value));
  }

  const renderSelect = () =>{
    let tempArr = [];
    tempArr.length = num;
    for(let i=0;i<num;i++){
      tempArr.push(i)
    }
   return tempArr.map(item=>{
      return (
        <div>
        <select>
          <option value="a">A</option>
        </select>
        </div>
      )
    })
   
  }
  return (
    <div className="App">
      <p>The app will render as many number 
        of select boxes as entered in the text box</p>
     <input type="text" onChange={(e)=>handleInputElem(e)} />
     <div>{num>0?renderSelect():null}</div>
    </div>
  );
}
