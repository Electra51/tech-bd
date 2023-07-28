import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AllProducts = ({ allProducts }) => {
    return (
        <div>
            Featured Product
            <div className='grid grid-cols-3 gap-4'>
                {
                    allProducts?.map((product) => <>  <div className="card w-96 bg-base-100 shadow-xl"  >
                        <figure> <Image
                            src={product?.image_url}
                            alt="Picture of the author"
                            width={500}
                            height={300}
                        /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {product?.title}
                            </h2>
                            <p>rating: {product?.rating}</p>
                            <p>category: {product?.category}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">status:{product?.status}</div>
                                <div className="badge badge-outline">Price:{product?.price}</div>
                                <Link href={`/products/${product?.id}`}>  <button className="btn btn-primary">View details</button></Link>
                            </div>
                        </div>
                    </div></>)
                }


            </div>
        </div >
    )
}

export default AllProducts