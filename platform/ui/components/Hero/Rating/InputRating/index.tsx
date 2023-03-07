import { useState } from "react";

import { x } from "@xstyled/emotion";

export interface InputRatingProps {
  /**
   * Integer from which the rating starts
   */
  from: number;
  /**
   * Integer to which the rating ends
   */
  to: number;
  /**
   * Default `1`. Number of rating steps between from and to.
   */
  stepSize?: number;
  /**
   * Callback function that returns the current rating
   */
  getCurrentRating?: (rating: number) => void;
}

const InputRating = ({
  from,
  to,
  stepSize = 1,
  getCurrentRating,
}: InputRatingProps) => {
  const [count, setCount] = useState(0);

  let currentRating = count + from;

  function increment() {
    if (currentRating >= to) return;
    setCount((count) => count + stepSize);
  }

  function decrement() {
    if (currentRating <= from) return;
    setCount((count) => count - stepSize);
  }

  getCurrentRating && getCurrentRating(currentRating);

  return (
    <x.div text="sm">
      <x.div>Current Rating: {currentRating}</x.div>
      <x.button onClick={increment}>+</x.button>
      <x.button onClick={decrement}>-</x.button>
    </x.div>
  );
};

export default InputRating;
