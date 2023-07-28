import Image from 'next/image'
import React from 'react'
import img1 from '../../assets/BannerImages/1st.jpg'
import img2 from '../../assets/BannerImages/2nd.jpg'
import img3 from '../../assets/BannerImages/3rd.jpg'
import img4 from '../../assets/BannerImages/4th.jpg'
const RightSideBannerPart = () => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <Image
                        src="https://i.pinimg.com/564x/e9/88/ae/e988ae89e78ddc7467d9ba9ad3399bae.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={300}
                    /></figure>
                <div className="card-body">

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary btn-sm">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                {/* <div className="carousel w-full">

                    <div id="slide2" className="carousel-item relative w-full">
                        <Image
                            src={img2}
                            alt="Picture of the author"
                            width={1200}
                            height={500}
                        />

                    </div>

                </div> */}

                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <Image
                            src={img1}
                            alt="Picture of the author"
                            width={1200}
                            height={500}
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <Image
                            src={img1}
                            alt="Picture of the author"
                            width={1200}
                            height={500}
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <Image
                            src={img3}
                            alt="Picture of the author"
                            width={1200}
                            height={500}
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <Image
                            src={img4}
                            alt="Picture of the author"
                            width={1200}
                            height={500}
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSideBannerPart