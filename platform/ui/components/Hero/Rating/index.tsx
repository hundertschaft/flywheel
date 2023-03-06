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
  timeToRespond,
  threshold,
  msgPositive,
  msgNegative,
}: RatingProps) => {
  return <x.div>A Rating Component</x.div>;
};

export default Rating;
