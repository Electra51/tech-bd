/* eslint-disable react/jsx-key */
import RootLayouts from "@/components/layouts/RootLayouts";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProductDetailPage = ({ product }) => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div className="container-xl p-4 mt-8">
      {" "}
      <div className="sm:columns-1 md:column-2 lg:columns-2 ">
        <div>
          <Image
            src={product?.image_url}
            alt="Picture of the author"
            width={500}
            height={300}
          />
        </div>
        <div>
          <h2 className="text-3xl mt-3 font-bold">{product?.product_name}</h2>
          <p className="text-xl mt-3 font-semibold">
            Category: {product?.category.charAt(0).toUpperCase() + product?.category.slice(1)}
          </p>
          <p className="text-xl font-medium">Rating: {product?.rating}</p>
          <p className="text-xl font-medium">{product?.rating_icon}</p>
          <p className="text-xl font-medium">Status: {product?.status}</p>
          <p className="text-xl font-medium">Price: {product?.price}</p>
          <p className="text-xl font-medium">Brand: {product?.brand}</p>
          <p className="text-xl font-medium">
            Specification: {product?.specifications}
          </p>

          <p className="text-xl font-medium">Type: {product?.type}</p>

          <p className="text-xl font-medium">Individual rating: {product?.individual_rating
          }</p>
          <p className="text-xl font-medium">Average rating:{product?.average_rating
          }</p>

        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold">Product Description:</h2>
        <p>{product?.description}</p>
      </div>
      <div className="mt-5">
        <h2 className="text-xl font-bold">Reviews:</h2>
        {product?.reviews?.map((review) => (
          <div className="flex justify-between items-center" key={review.id}>
            {" "}
            <p>{review?.comment}</p>
            <div>
              Rating:{review?.rating} {review?.rating_icon}
            </div>
          </div>
        ))}
        {/* <p>{product?.product_name}</p> */}
      </div>
    </div>
  );
};
export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};


export async function getServerSideProps({ params }) {
  const { productId } = params;
  const response = await fetch(
    `http://localhost:3000/api/categories?_id=${productId}`
  );
  const data = await response.json();
  const product = data.data[0];

  return {
    props: {
      product,
    },
  };
}
