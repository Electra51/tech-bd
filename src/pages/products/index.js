import RootLayouts from '@/components/layouts/RootLayouts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductsPage = ({ productsData }) => {
    console.log(productsData)
    return (
        <div className='container-xl p-4 mt-3'>
            <div className='grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-3 align-middle items-center gap-4'>
                {
                    productsData?.map((product) => <>  <div className="card  bg-base-100 rounded-none border"  >
                        <figure> <Image
                            src={product?.image_url}
                            alt="Picture of the author"
                            width={500}
                            height={300}
                        /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {product?.product_name}
                            </h2>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                    <p className='font-bold'> {product?.rating_icon}</p>
                                    <p className='font-bold ms-2'> {product?.rating}</p>

                                </div>   {
                                    product?.status == 'Out of stock' ? <div className="badge badge-error">
                                        <p className='text-white'> {product?.status}</p>

                                    </div> : <div className="badge badge-success">
                                        <p className='text-white'>   {product?.status}</p>

                                    </div>
                                }
                            </div>
                            <p>Category Name: {product?.category_name}</p>
                            <p >Price: <span className='font-bold'>{product?.price}TK</span></p>
                            <div className="card-actions ">
                                <Link href={`/products/${product?.id}`} style={{ width: '100%' }}>
                                    <button className="btn " style={{ background: '#32BD8F', color: 'white', width: '100%', textDecoration: 'none' }}>View details</button></Link>
                            </div>
                        </div>
                    </div></>)
                }


            </div>
        </div>
    )
}

export default ProductsPage;

ProductsPage.getLayout = function getLayout(page) {
    return <RootLayouts>{page}</RootLayouts>;
};

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:3000/api/products");
    const data = await res.json();
    console.log(data);
    return {
        props: {
            productsData: data.data
        },
        revalidate: 30,
    }
}