import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import img1 from '../../assets/BannerImages/1st.jpg'
import img2 from '../../assets/BannerImages/2nd.jpg'
import img3 from '../../assets/BannerImages/3rd.jpg'
import img4 from '../../assets/BannerImages/4th.jpg'
import './rightsidebanner.module.css'
const RightSideBannerPart = () => {
    const offer = {

        _id: "1",
        name: "Digital X 850VA Offline UPS",
        description: "Powerful gaming PC with high-end components.",
        originalPrice: 4600,
        discountPercentage: 50,
        timeLimit: "2023-08-31T23:59:59Z",
        img: "https://i.ibb.co/k4k77HK/850va-500x500-removebg-preview.png"

    }
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());


    function calculateTimeLeft() {
        const currentTime = new Date().getTime();
        const timeLimit = new Date(offer.timeLimit).getTime();
        return Math.max(0, timeLimit - currentTime);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeLeft, setTimeLeft]);

    const formatTime = (time) => {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);
        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };
    return (
        <div>
            <div className="card relative bg-base-100 border rounded-none">

                <figure className='p-0'>
                    <Image
                        src={offer?.img}
                        alt="Picture of the author"
                        width={500}
                        height={200}
                    /></figure>

                <h2 className='text-xl text-center font-bold'>{offer.name}</h2>
                <p className='text-xl text-center pb-4'>Original Price: ${offer.originalPrice}</p>

                <div className='absolute top-0 left-0 z-10'> {timeLeft > 0 ? (
                    <p className='font-bold text-white bg-[#32BD8F] mt-2 p-2'>Time: {formatTime(timeLeft)}</p>
                ) : (
                    <p>offer has ended!</p>
                )}</div>
                <div className='absolute top-16 left-0 z-10'>
                    <p className='font-bold text-2xl text-white bg-rose-500 mt-2 p-2'> {offer.discountPercentage}%</p>

                </div>

            </div>
            <div className='mt-6'> <div className="carousel w-full">
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