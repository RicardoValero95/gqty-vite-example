import { Suspense, useState } from "react";
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
        <p>Non-suspense</p>
        <LazyCountries suspense={false} />
        <br />
        <p>Suspense</p>
        <Suspense fallback="Loading...">
          <LazyCountries suspense={true} />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
