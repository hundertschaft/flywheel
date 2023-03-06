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
      mb="4"
      borderBottom="1"
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="60px"
    >
      {children}
    </x.header>
  );
};

export default Header;
