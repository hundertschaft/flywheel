import { useState } from "react";

import Counter from "@ui/components/counter";
import Layout from "@ui/layout";
import Shell from "@ui/shell";

interface RouterProps {}

const Router = ({}: RouterProps) => {
  const [count, setCount] = useState(0);

  return (
    <Shell>
      <Layout>
        <Counter />
      </Layout>
    </Shell>
  );
};

export default Router;
