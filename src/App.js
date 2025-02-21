import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './component/Main.js'
import MainPlaylist from './component/MainPlaylist.js'
import './CSS/App.css';
import './CSS/Main.css';
import './CSS/reset.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route className='main' path='/' element={
          <Main></Main>
        }/>
        <Route className='makePlaylist' path='/MakePlaylist' element={<MainPlaylist></MainPlaylist>}></Route>
      </Routes>
    </div>
  );
}

export default App;
