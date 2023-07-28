import Banner from '@/components/ui/Banner'
import FeaturedCategory from '@/components/ui/FeaturedCategory'
import RightSideBannerPart from '@/components/ui/RightSideBannerPart'
import React from 'react'
import AllProducts from '@/components/ui/AllProducts'

const HomePage = ({ allProducts }) => {

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