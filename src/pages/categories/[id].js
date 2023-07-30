// pages/pc-builder.js

import Link from "next/link";
import { useRouter } from "next/router";

const Component = ({ products }) => {
    console.log('products', products)
    const router = useRouter();
    const { id } = router.query;
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">PC Builder</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-full">
                {products.map((product) => (
                    <div className="bg-white rounded-lg shadow-xl h-full" key={product._id}>
                        <img
                            src={product.img}
                            alt={product.ProductName}
                            className="w-full object-cover h-52"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                                {product.product_name}
                            </h2>
                            <p className="text-sm text-gray-500 mb-1 line-clamp-1">
                                Category: {product.category}
                            </p>
                            <p className="text-lg font-bold mb-2">${product.price}</p>
                            <p className="text-sm mb-2">Status: {product.status}</p>
                            <p className="text-sm mb-5">Rating: {product.AverageRating} out of 5 stars</p>
                            <Link href={`/products/${product._id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Component;

// ... getServerSideProps remains the same ...
export async function getServerSideProps({ params }) {
    const { id } = params;

    const response = await fetch(`http://localhost:3000/api/categories?Category=${id}`);
    const data = await response.json();
    const products = data.data;
    console.log(products)

    return {
        props: {
            products,
        },
    };
}
