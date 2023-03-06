import { useState } from "react";

import Shell from "@ui/shell";

import Layout from "@ui/layout";
import Footer from "@ui/layout/Footer";
import Header from "@ui/layout/Header";

import Counter from "@ui/components/CounterSample";

interface RouterProps {}

const Router = ({}: RouterProps) => {
  return (
    <Shell>
      <Layout
        header={<Header>Welcome Header</Header>}
        footer={
          <Footer>
            <i>the footer</i>
          </Footer>
        }
      >
        <Counter title="Hello from Views" />
      </Layout>
    </Shell>
  );
};

export default Router;
