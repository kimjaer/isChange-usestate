import { Route, Routes, Link } from 'react-router-dom';
import Kornavi from './child/first';
import Ennavi from './child/snd'
import './jjr.css';

function App() {
  return (
    <div className='App'>

      <div>
        <Link to="/kr">한국어</Link>
        <Link to="/en">English</Link>
      </div>
      <Routes>
        <Route path='/kr' element={<Kornavi></Kornavi>}></Route>
        <Route path='/en' element={<Ennavi></Ennavi>}></Route>
      </Routes>
    </div>
  );
}

export default App;
