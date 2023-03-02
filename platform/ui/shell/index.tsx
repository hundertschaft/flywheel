interface ShellProps {
  children: React.ReactNode;
}

const Shell = ({ children }: ShellProps) => {
  return (
    <div className="Shell">
      Bla bla shell
      <br />
      {children}
    </div>
  );
};

export default Shell;
