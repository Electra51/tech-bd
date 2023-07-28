import Banner from '@/components/ui/Banner'
import FeaturedCategory from '@/components/ui/FeaturedCategory'
import RightSideBannerPart from '@/components/ui/RightSideBannerPart'
import React from 'react'

const HomePage = () => {
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
    </div>
  )
}

export default HomePage