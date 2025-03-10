import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import Main from './component/Main.js'
import MainPlaylist from './component/MainPlaylist.js'
import PlayingMusic from './component/PlayingMusic.js'
import './CSS/App.css';
import './CSS/Main.css';
import './CSS/reset.css';
import './CSS/Item.css';
import './CSS/PlayMusic.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route className='main' path='/' element={<Main></Main>}/>
        <Route className='playMusic' path='/music/:para' element={<PlayingMusic></PlayingMusic>}/>
        <Route className='makePlaylist' path='/MakePlaylist' element={<MainPlaylist></MainPlaylist>}></Route>
      </Routes>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.3.0/color-thief.umd.js"></script>
    </div>
  );
}

export default App;
