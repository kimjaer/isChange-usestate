import { useState } from 'react';
import './jjr.css';


function App() {
  const [bgc, bgchange] = useState(false);

  return (
    <div className={`App ${!bgc ? "blackmode" : "skybluemode"}`}>

      <button onClick={() => { bgchange(!bgc) }}>
        {/* {!bgc ? "black" : "skyblue"} */}
      </button>
    </div >
  );
}

export default App;
