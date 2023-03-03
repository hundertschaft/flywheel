import DesignSystem from "./DesignSystem";

interface ShellProps {
  children: React.ReactNode;
}

const Shell = ({ children }: ShellProps) => {
  return <DesignSystem>{children}</DesignSystem>;
};

export default Shell;
