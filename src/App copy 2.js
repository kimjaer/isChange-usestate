import { useEffect, useRef, useState } from "react";
import "./jjr.css";

function App() {
  // userefvar 변수를  useRef 변수로 만들어주기
  const [num, updatenum] = useState(0);
  let userefvar = false;
  const bgchange = () => {
    if (userefvar) {
      document.querySelector(".App").classList = "App blackmode";
    } else {
      document.querySelector(".App").classList = "App skybluemode";
    }
    userefvar = !userefvar
  }
  useEffect(() => {
    bgchange()
  }, [])
  useEffect(() => {
    const autonum = setInterval(() => { updatenum(num + 1) }, 1000)
    return () => { clearInterval(autonum) }
  }, [num])
  return (
    <div className="App " >
      <p>{num}</p>
      <button onClick={bgchange}>

      </button>
    </div>
  );
}
export default App;