import {useEffect, useState} from 'react';

import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/header"; // header = header.js

function App() {
  const [data, setData] = useState(null);
  useEffect(() =>{
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." :  data}</p>
        <Header />
      </header>
    </div>
  );
}

export default App;
