import Banner from '@/components/ui/Banner'
import FeaturedCategory from '@/components/ui/FeaturedCategory'
import RightSideBannerPart from '@/components/ui/RightSideBannerPart'
import React from 'react'
import AllProducts from '@/components/ui/AllProducts'
import RootLayouts from '@/components/layouts/RootLayouts'
import { useGetProductsQuery } from '@/redux/api/api'

const HomePage = ({ allProducts }) => {

  const { data, isLoading, isError, error } = useGetProductsQuery();


  return (
    <div className='container-xl p-4 '>
      <div className="grid grid-cols-4 gap-4">

        <div className="col-span-3 ..." >
          <Banner></Banner>
        </div>
        <div className="...">
          <div>
            <RightSideBannerPart />
          </div>
        </div>
      </div>
      <FeaturedCategory />
      <AllProducts allProducts={allProducts} />
    </div>
  )
}

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      allProducts: data
    },
    revalidate: 30,
  }
}