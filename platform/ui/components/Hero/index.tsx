import reactLogo from "@g/assets/media/vendor/react.svg";
import viteLogo from "@g/assets/media/vendor/vite.svg";

import { ReactNode } from "react";

import { x } from "@xstyled/emotion";

import Rating from "./Rating";

interface HeroProps {
  welcomeMsg: string;
  /**
   * Text under the welcome message.
   * Note that content is wrapped in a `p` tag.
   */
  children: ReactNode;
}

/**
 * Hero introducing the app
 */
const Hero = ({ welcomeMsg, children }: HeroProps) => {
  return (
    <>
      <x.div display="flex" gap={2} mb={3}>
        <x.img alt="Vite logo" src={viteLogo} width={24} />
        <x.img alt="React logo" src={reactLogo} width={24} />
      </x.div>

      <x.h1 mb={2} text="xl">
        {welcomeMsg}
      </x.h1>
      <x.p>{children}</x.p>

      <Rating
        from={1}
        msgNegative="Oh bad"
        msgPositive="Great!"
        threshold={6}
        timeToRespond={3000}
        to={10}
      />
    </>
  );
};

export default Hero;
