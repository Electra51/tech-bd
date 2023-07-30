// pages/pc-builder.js

import RootLayouts from "@/components/layouts/RootLayouts";
import { addToBuilder } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const Component = ({ products }) => {
  const router = useRouter();
  const { componentId } = router.query;
  const dispatch = useDispatch();
  return (
    <div className="container p-4">
      <h1 className="text-3xl font-bold mb-4">PC Builder</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            className="card  bg-base-100 rounded-none border my-10"
            key={product._id}
          >
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
                  {" "}
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>{" "}
                  <p className="font-bold ms-2"> {product?.rating}</p>
                </div>{" "}
                {product?.status == "Out of Stock" ? (
                  <div className="badge badge-error">
                    <p className="text-white"> {product?.status}</p>
                  </div>
                ) : (
                  <div className="badge badge-success">
                    <p className="text-white"> {product?.status}</p>
                  </div>
                )}
              </div>
              <p>Category Name: {product?.category}</p>
              <p>
                Price: <span className="font-bold">{product?.price}TK</span>
              </p>
              <div className="card-actions ">
                <Link href="/pcBuilder" style={{ width: "100%" }}>
                  <button
                    onClick={() => {
                      dispatch(addToBuilder(product));
                      router.replace("/pcBuilder");
                    }}
                    className="btn "
                    style={{
                      background: "#32BD8F",
                      color: "white",
                      width: "100%",
                      textDecoration: "none",
                    }}
                  >
                    Add to builder
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component;

Component.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};

//ssr
export async function getServerSideProps({ params }) {
  const { componentId } = params;
  const response = await fetch(
    `https://tech-bd-electra51.vercel.app/api/categories?category=${componentId}`
  );
  const data = await response.json();
  const products = data.data;

  return {
    props: {
      products,
    },
  };
}
