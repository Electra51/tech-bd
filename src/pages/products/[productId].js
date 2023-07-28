import Image from 'next/image';
import React from 'react'

const ProductDetailPage = ({ productsData }) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><Image
                src={productsData?.image_url}
                alt="Picture of the author"
                width={500}
                height={300}
            /></figure>
            <div className="card-body">
                <h2 className="card-title">{productsData?.title}</h2>
                <p>{productsData?.category}</p>
                <p>rating</p>
                <p>status</p>
                <p>price</p>
                <p>Brand</p>
                <p>model</p>
                <p>Specification</p>
                <p>Port</p>
                <p>Type</p>
                <p>Resolution</p>
                <p>Voltage</p>
                <p>Individual rating</p>
                <p>Average rating</p>
                <p>Review</p>

            </div>
        </div>
    )
}
export default ProductDetailPage;


export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    console.log(data);
    const paths = data?.map((product) => ({
        params: { productId: product.id },
    }));
    return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:5000/products/${params.productId}`);
    const data = await res.json();
    console.log(data);
    return {
        props: {
            productsData: data
        },
        revalidate: 30,
    }
}
