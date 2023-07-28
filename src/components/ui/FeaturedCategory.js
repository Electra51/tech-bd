/* eslint-disable @next/next/no-img-element */

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import img from '../../assets/1.png';
import img1 from '../../assets/2.png';
import img2 from '../../assets/3.png';
import img3 from '../../assets/4.png';
import img4 from '../../assets/5.png';
import img5 from '../../assets/6.png';
import Image from "next/image";
import Link from "next/link";
const FeaturedCategory = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>FeaturedCategory

            <div className="overflow-hidden">

                <Slider {...settings}>
                    <div style={{ border: '1px solid yellow' }}>
                        <Link href='/cpu'>  <div className="card w-56 bg-base-100 shadow-xl" style={{ border: '1px solid green' }}>
                            <figure className="px-10 pt-10">
                                <Image
                                    src={img}
                                    alt="Picture of the author"
                                    width={1200}
                                    height={500}
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">CPU</h2>

                            </div>
                        </div></Link>

                    </div>
                    <div>
                        <Link href='/monitor'> <div className="card w-56 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <Image
                                    src={img1}
                                    alt="Picture of the author"
                                    width={1200}
                                    height={500}
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Monitor</h2>

                            </div>
                        </div></Link>
                    </div>
                    <div>
                        <Link href='/mother-board'> <div className="card w-56 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <Image
                                    src={img2}
                                    alt="Picture of the author"
                                    width={1200}
                                    height={500}
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">MotherBoard</h2>

                            </div>
                        </div></Link>
                    </div>
                    <div>
                        <Link href='power-supply-unit'> <div className="card w-56 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <Image
                                    src={img3}
                                    alt="Picture of the author"
                                    width={1200}
                                    height={500}
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Power Supply Unit</h2>

                            </div>
                        </div></Link>
                    </div>
                    <div>
                        <Link href='/ram'><div className="card w-56 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <Image
                                    src={img4}
                                    alt="Picture of the author"
                                    width={1200}
                                    height={500}
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">RAM</h2>

                            </div>
                        </div></Link>
                    </div>
                    <div>
                        <Link href='/storage-device'><div className="card w-56 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <Image
                                    src={img5}
                                    alt="Picture of the author"
                                    width={1200}
                                    height={500}
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Storage Device</h2>

                            </div>
                        </div></Link>
                    </div>
                </Slider>
            </div>

        </div>
    )
}

export default FeaturedCategory