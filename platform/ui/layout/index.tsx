import { x } from "@xstyled/emotion";

interface LayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const Layout = ({ children, header, footer }: LayoutProps) => {
  return (
    <x.div minH="100vh" display="flex" flexDirection="column">
      {header}
      <x.main mx="4" flex="auto">
        {children}
      </x.main>
      {footer}
    </x.div>
  );
};

export default Layout;
