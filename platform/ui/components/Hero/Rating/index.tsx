import { useState } from "react";

import { x } from "@xstyled/emotion";

interface RatingProps {
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
   * Integer that defines the threshold at which the rating is considered positive
   */
  threshold: number;
  /**
   * Time in milliseconds to wait before showing the rating
   */
  timeToRespond: number;
  /**
   * Message to show when the rating is positive
   */
  msgPositive: string;
  /**
   * Message to show when the rating is negative
   */
  msgNegative: string;
}

/**
 * Simple rating that shows a positive or negative message after a certain time
 */
const Rating = ({
  from,
  to,
  stepSize = 1,
  timeToRespond,
  threshold,
  msgPositive,
  msgNegative,
}: RatingProps) => {
  const [quizActive, setQuizActive] = useState(false);

  let ratingInput;

  if (quizActive) {
    ratingInput = <x.div text="sm">Quiz Active and ready for Input</x.div>;
  } else {
    ratingInput = <x.div text="sm">let's go</x.div>;
  }

  return (
    <x.div pt={6}>
      <x.h2 my={2} text="lg" fontStyle="italic">
        Rating
      </x.h2>
      <x.p fontStyle="italic" text="sm">
        How strong do you agree with the following statement:
      </x.p>
      <x.div m={3} text="sm">
        <x.code lineHeight="relaxed">
          An insufficient design removes your ability to change or scale.
        </x.code>
      </x.div>
      {ratingInput}
      <x.div py={2} display="flex" justifyContent="center">
        <x.button
          text="lg"
          onClick={() => setQuizActive((quizActive) => !quizActive)}
        >
          {quizActive ? "START" : "STOP"}
        </x.button>
      </x.div>
    </x.div>
  );
};

export default Rating;
