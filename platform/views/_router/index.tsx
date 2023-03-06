import { useState } from "react";

import Counter from "@ui/components/CounterSample";
import Layout from "@ui/layout";
import Shell from "@ui/shell";

interface RouterProps {}

const Router = ({}: RouterProps) => {
  const [count, setCount] = useState(0);

  return (
    <Shell>
      <Layout>
        <Counter title="Hello from Views" />
      </Layout>
    </Shell>
  );
};

export default Router;
