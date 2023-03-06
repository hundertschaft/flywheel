import { useState } from "react";

import Counter from "@ui/components/CounterSample";
import Layout from "@ui/layout";
import Header from "@ui/layout/Header";
import Shell from "@ui/shell";

interface RouterProps {}

const Router = ({}: RouterProps) => {
  return (
    <Shell>
      <Layout header={<Header>Hello and Welcome</Header>}>
        <Counter title="Hello from Views" />
      </Layout>
    </Shell>
  );
};

export default Router;
