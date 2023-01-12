import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.75,
      },
    },
  };

  const animatedItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
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
        <motion.ul style={{
          width: '100%',
          padding: 0
        }} variants={container} initial="hidden" animate="show">
          <motion.li className="no-bullets" variants={animatedItem}>Life is good</motion.li>
          <motion.li className="no-bullets" variants={animatedItem}>If you keep learning</motion.li>
        </motion.ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
