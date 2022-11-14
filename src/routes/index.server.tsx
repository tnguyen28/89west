import { Layout } from "../shop-components/Layout.server";
import FeaturedCollections from "../shop-components/FeaturedCollections.server";

import { Suspense } from "react";

const Home = () => {
  return (
    <Layout>
      <Suspense>
        <FeaturedCollections />
      </Suspense>
    </Layout>
  );
};

export default Home;
