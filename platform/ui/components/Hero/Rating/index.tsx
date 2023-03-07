import { useState } from "react";

import { x } from "@xstyled/emotion";

import InputRating, { InputRatingProps } from "./InputRating";

interface RatingProps extends InputRatingProps {
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
  const [rating, setRating] = useState(0);

  let inputRating;

  if (quizActive) {
    inputRating = (
      <InputRating
        from={from}
        to={to}
        stepSize={stepSize}
        getCurrentRating={(currentRating) => setRating(currentRating)}
      />
    );
  } else {
    inputRating = <x.div text="sm">let's go</x.div>;
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

      {inputRating}

      <x.div py={2} display="flex" justifyContent="center">
        <x.button
          text="lg"
          onClick={() => setQuizActive((quizActive) => !quizActive)}
        >
          {quizActive ? "STOP" : "START"}
        </x.button>
      </x.div>

      {rating >= threshold ? (
        <x.div>{msgPositive}</x.div>
      ) : (
        <x.div>{msgNegative}</x.div>
      )}
    </x.div>
  );
};

export default Rating;
