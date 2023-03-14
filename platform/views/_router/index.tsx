import Shell from "@ui/shell";

import Layout from "@ui/layout";
import Footer from "@ui/layout/Footer";
import Header from "@ui/layout/Header";

import Hero from "@ui/components/Hero";

interface RouterProps {}

const Router = ({}: RouterProps) => {
  return (
    <Shell>
      <Layout
        header={<Header>Header</Header>}
        footer={
          <Footer>
            <i>the footer</i>
          </Footer>
        }
      >
        <Hero welcomeMsg="Welcome to this Sample App!">
          This is a sample app built with React, TypeScript, Vite and xStyled
          (Emotion) in a Mono-Repository style pattern using pnpm workspaces.
        </Hero>
      </Layout>
    </Shell>
  );
};

export default Router;
