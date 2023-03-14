import { ReactNode } from "react";

import { x } from "@xstyled/emotion";

interface FooterProps {
  children: ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  return (
    <x.footer
      alignItems="center"
      borderTop="1"
      display="flex"
      h="30px"
      justifyContent="center"
      mt="4"
    >
      {children}
    </x.footer>
  );
};

export default Footer;
