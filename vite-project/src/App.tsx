import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { LazyCountries } from "./lib/components/LazyCountries";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <LazyCountries />
      </header>
    </div>
  );
}

export default App;
