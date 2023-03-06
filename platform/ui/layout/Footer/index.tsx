import { ReactNode } from "react";

import { x } from "@xstyled/emotion";

interface FooterProps {
  children: ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  return (
    <x.footer
      mt="4"
      borderTop="1"
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="30px"
    >
      {children}
    </x.footer>
  );
};

export default Footer;
