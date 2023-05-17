// import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"; // 追加
import Home from './chapter/1/Home';
import Chapter21 from './chapter/2/Chapter21';
import Chapter22 from './chapter/2/Chapter22';

function App() {
  return (
    <Routes> {/*Routesで囲む*/}
      <Route path="/" element={ <Home /> } /> {/*RouteにHomeを設定する*/}
      <Route path="/2-1" element={ <Chapter21 /> } /> {/*追加*/}
      <Route path="/2-2" element={ <Chapter22 /> } /> {/*追加*/}
    </Routes>

  );
}

export default App;
