import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
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
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam asperiores odit nostrum, nemo perferendis, sapiente numquam dolorum laborum placeat amet labore inventore architecto rerum omnis magni, repellendus quae exercitationem impedit!</p>
      </div>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime alias rem deserunt!</p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ul>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ol>
        <li>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </li>
        <li>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </li>
        <li>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </li>
        <li>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </li>
        <li>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </li>
      </ol>
    </>
  )
}

export default App
