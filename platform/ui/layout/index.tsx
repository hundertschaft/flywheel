import { x } from "@xstyled/emotion";

interface LayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const Layout = ({ children, header, footer }: LayoutProps) => {
  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
};

export default Layout;
