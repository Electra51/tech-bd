/* eslint-disable @next/next/no-img-element */
import RootLayouts from "@/components/layouts/RootLayouts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const PcBuilderPage = ({ categories }) => {
  const [disabled, setDisabled] = useState(true);
  const selectedProducts = useSelector((state) => state.products);
  useEffect(() => {
    if (
      selectedProducts.length >= 5
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [selectedProducts]);

  return (
    <div className="container p-4">
      <h1 className="text-3xl font-bold text-center">Build Your PC Now!</h1>
      <div className="flex justify-center">
        <img className="md:w-2/12 w-8/12" src="./pc.svg" alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white shadow-md border p-4 hover:bg-gray-100"
          >
            <h2 className="text-xl font-semibold mb-2 text-center">
              {category.name}
            </h2>


            {!selectedProducts.find(
              (selectedProduct) => selectedProduct?.category === category.id
            )?.product_name ? (
              <Link
                href={`/pcBuilder/${category.id}`}
                className="text-blue-600"
              >
                <button
                  className="btn btn-sm w-full"
                  style={{ background: "#3a3768", color: "white" }}
                >
                  {" "}
                  Select a {category.name}
                </button>
              </Link>
            ) : (
              <div className="card card-side bg-base-100 border rounded-none">
                <figure> < img className="w-1/2" src={selectedProducts.find(
                  (selectedProduct) =>
                    selectedProduct?.category === category.id
                )?.image_url} alt="Movie" /></figure>
                <div className="w-full mt-5 p-2">
                  <p className="text-green text-green-600 font-bold">{selectedProducts.find(
                    (selectedProduct) =>
                      selectedProduct?.category === category.id
                  )?.product_name}</p>
                  <p>Price: {
                    selectedProducts.find(
                      (selectedProduct) =>
                        selectedProduct?.category === category.id
                    )?.price
                  }</p>

                </div>
              </div>

            )}
          </div>
        ))}
      </div>
      <div className="mt-6 mx-auto">
        <button
          onClick={() => {
            toast.success("Your PC Build Successfully");
          }}
          disabled={disabled}
          className={
            disabled
              ? 'px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#73827d] rounded-md'
              : "px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#32BD8F] rounded-md hover:bg-[#32BD8F] focus:outline-none focus:bg-[#21ad7e]"
          }
        >
          Build you pc
        </button>
      </div>
    </div>
  );
};

export default PcBuilderPage;
PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};

//ssr
export async function getServerSideProps() {
  const response = await fetch(
    `https://tech-bd-electra51.vercel.app/api/categories?categories=1`
  );
  const data = await response.json();
  const categories = data.data;

  return {
    props: {
      categories,
    },
  };
}
