import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllProducts = ({ randomProducts }) => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center my-16">
        {" "}
        Featured Products
      </h2>
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-3 align-middle items-center gap-4">
        {randomProducts?.map((product) => (
          <>
            {" "}
            <div className="card  bg-base-100 rounded-none border" key={product?._id}>
              <figure>
                {" "}
                <Image
                  src={product?.image_url}
                  alt="Picture of the author"
                  width={500}
                  height={300}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product?.product_name}</h2>
                <div className="flex justify-between">
                  <div className="flex">
                    <p className="font-bold"> {product?.rating_icon}</p>
                    <p className="font-bold ms-2"> {product?.rating}</p>
                  </div>{" "}
                  {product?.status == "Out of stock" ? (
                    <div className="badge badge-error">
                      <p className="text-white"> {product?.status}</p>
                    </div>
                  ) : (
                    <div className="badge badge-success">
                      <p className="text-white"> {product?.status}</p>
                    </div>
                  )}
                </div>
                <p>Category Name: {product?.category.charAt(0).toUpperCase() + product?.category.slice(1)}</p>
                <p>
                  Price: <span className="font-bold">{product?.price}TK</span>
                </p>
                <div className="card-actions ">
                  <Link
                    href={`/products/${product._id}`}
                    style={{ width: "100%" }}
                  >
                    <button
                      className="btn "
                      style={{
                        background: "#32BD8F",
                        color: "white",
                        width: "100%",
                        textDecoration: "none",
                      }}
                    >
                      View details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
