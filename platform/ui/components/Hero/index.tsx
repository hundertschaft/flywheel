import reactLogo from "@g/assets/media/vendor/react.svg";
import viteLogo from "@g/assets/media/vendor/vite.svg";

import { ReactNode } from "react";

import { x } from "@xstyled/emotion";

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
        <x.img width={24} src={viteLogo} alt="Vite logo" />
        <x.img width={24} src={reactLogo} alt="React logo" />
      </x.div>

      <x.h1 text="xl" mb={2}>
        {welcomeMsg}
      </x.h1>
      <x.p>{children}</x.p>
    </>
  );
};

export default Hero;
