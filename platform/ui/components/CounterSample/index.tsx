import reactLogo from "@g/assets/media/vendor/react.svg";
import viteLogo from "@g/assets/media/vendor/vite.svg";

import { useState } from "react";

interface CounterSampleProps {
  /**
   * Title of the sample counter.
   */
  title?: string;
}

/**
 * Sample counter component to test rendering.
 */
const CounterSample = ({ title = "Tile Title" }: CounterSampleProps) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{title}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
};

export default CounterSample;
