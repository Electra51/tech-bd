import Banner from "@/components/ui/Banner";
import RightSideBannerPart from "@/components/ui/RightSideBannerPart";
import React from "react";
import AllProducts from "@/components/ui/AllProducts";
import RootLayouts from "@/components/layouts/RootLayouts";
import { useGetProductsQuery } from "@/redux/api/api";
import dynamic from 'next/dynamic'

const getRandomProducts = (data, count) => {
  const shuffledData = data.sort(() => 0.5 - Math.random());
  return shuffledData.slice(0, count);
};

const HomePage = ({ randomProducts, uniqueCategories }) => {
  // Group products by category
  const groupedProducts = randomProducts.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  const { data, isLoading, isError, error } = useGetProductsQuery();

  const DynamicFeaturedCategory = dynamic(() => import('@/components/ui/FeaturedCategory'), {
    loading: () => <p>Loading...</p>,
    ssr: false,
  })

  const DynamicAllProducts = dynamic(() => import('@/components/ui/AllProducts'), {
    loading: () => <p>Loading...</p>,
    ssr: false,
  })

  return (
    <div className="container-xl p-4 ">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 sm:grid-cols-1 gap-4">
        <div className="col-span-3 sm:col-span-1 lg:col-span-3 md:col-span-1 ...">
          <Banner></Banner>
        </div>
        <div className="...">
          <div>
            <RightSideBannerPart />
          </div>
        </div>
      </div>
      <DynamicFeaturedCategory uniqueCategories={uniqueCategories} />
      <DynamicAllProducts randomProducts={randomProducts} />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/categories");
  const data = await response.json();
  const randomProducts = getRandomProducts(data.data, 6);

  const response2 = await fetch(
    `http://localhost:3000/api/categories?categories=1`
  );
  const data2 = await response2.json();
  const uniqueCategories = data2.data;

  return {
    props: {
      randomProducts,
      uniqueCategories,
    },
  };
};
