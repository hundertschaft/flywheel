import { ReactNode } from "react";

import { x } from "@xstyled/emotion";

interface HeaderProps {
  /**
   * Will be centered in the header.
   */
  children: ReactNode;
}

/**
 * A simple header component.
 */
const Header = ({ children }: HeaderProps) => {
  return (
    <x.header
      alignItems="center"
      borderBottom="1"
      display="flex"
      fontWeight="semibold"
      h="60px"
      justifyContent="center"
      mb="4"
      text="xl"
    >
      {children}
    </x.header>
  );
};

export default Header;
