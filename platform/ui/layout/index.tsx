import { x } from "@xstyled/emotion";

interface LayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const Layout = ({ children, header, footer }: LayoutProps) => {
  return (
    <x.div display="flex" flexDirection="column" minH="100vh">
      {header}
      <x.main flex="auto" mx="4">
        {children}
      </x.main>
      {footer}
    </x.div>
  );
};

export default Layout;
