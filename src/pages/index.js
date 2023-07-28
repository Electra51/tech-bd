import Banner from '@/components/ui/Banner'
import RightSideBannerPart from '@/components/ui/RightSideBannerPart'
import React from 'react'

const HomePage = () => {
  return (
    <div className='container-xl p-4 '>
      <div class="grid grid-cols-4 gap-4">

        <div class="col-span-3 ..." >
          <Banner></Banner>
        </div>
        <div class="...">
          <div>
            <RightSideBannerPart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage