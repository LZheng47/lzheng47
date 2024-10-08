import "./styles/hero.scss";
import Navbar from "./components/Navbar";

const navitems = [
  "Connect",
  "Latest",
  "Websites",
  "logo",
  "Games",
  "Programs",
  "EXP/EDU",
];

function App() {
  return (
    <>
      <div id="hero-background"></div>
      <div id="grid">
        <div id="hero">
          <Navbar links={navitems} />
          <div id="hero-content">
            <div id="hero-content-left">
              <h3> Hey! My name is </h3>
              <h1> Lily Zheng </h1>
              <p>
                A passionate computer programmer with experience in
                <strong>Python</strong>, <strong>Java</strong>, &
                <strong>Web Development</strong>.
              </p>
            </div>
            <div id="hero-content-right">
              <img src="/images/logo.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
