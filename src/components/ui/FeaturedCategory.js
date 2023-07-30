/* eslint-disable @next/next/no-img-element */

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import img from "../../assets/1.png";
import img1 from "../../assets/2.png";
import img2 from "../../assets/3.png";
import img3 from "../../assets/4.png";
import img4 from "../../assets/5.png";
import img5 from "../../assets/6.png";
import Image from "next/image";
import Link from "next/link";

const FeaturedCategory = ({ uniqueCategories }) => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center my-16">
        {" "}
        Featured Category
      </h2>
      <div className="overflow-hidden">
        <div class="gap-16 sm:columns-2 lg:columns-6 md:columns-3 ...">
          {uniqueCategories?.map((item) => (
            <>
              {" "}
              <div className="border cursor-pointer">
                <Link href={`/categories/${item.id}`}>
                  <figure className="px-10 pt-10">
                    <Image
                      src={item?.img}
                      alt="Picture of the author"
                      width={1200}
                      height={500}
                    />
                  </figure>

                  <h2 className=" items-center text-center">{item?.name} </h2>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategory;
