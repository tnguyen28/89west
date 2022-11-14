import { Layout } from "../components/Layout.server";
import FeaturedCollections from "../components/FeaturedCollections.server";

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
