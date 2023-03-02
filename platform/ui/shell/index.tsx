import Layout from "@ui/layout";

import DesignSystem from "./DesignSystem";

interface ShellProps {
  children: React.ReactNode;
}

const Shell = ({ children }: ShellProps) => {
  return (
    <DesignSystem>
      <Layout>{children}</Layout>
    </DesignSystem>
  );
};

export default Shell;
