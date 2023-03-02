import { x } from "@xstyled/emotion";

interface LayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const Layout = ({ children, header, footer }: LayoutProps) => {
  return (
    <>
      <x.header backgroundColor="red" h="60px">
        <x.text color="white">Header</x.text>
        {header}
      </x.header>
      <main>{children}</main>
      {footer}
    </>
  );
};

export default Layout;
