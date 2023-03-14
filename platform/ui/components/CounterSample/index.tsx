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
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img alt="Vite logo" className="logo" src={viteLogo} />
        </a>
        <a href="https://reactjs.org" rel="noreferrer" target="_blank">
          <img alt="React logo" className="logo react" src={reactLogo} />
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
