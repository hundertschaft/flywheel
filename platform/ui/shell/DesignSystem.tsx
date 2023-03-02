import { Preflight, ThemeProvider, defaultTheme } from "@xstyled/emotion";

const theme = {
  ...defaultTheme,
  // Customize your theme here
};

interface DesignSystemProps {
  children: React.ReactNode;
}

const DesignSystem = ({ children }: DesignSystemProps) => (
  <ThemeProvider theme={theme}>
    <Preflight />
    {children}
  </ThemeProvider>
);

export default DesignSystem;
