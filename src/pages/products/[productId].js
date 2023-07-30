import RootLayouts from '@/components/layouts/RootLayouts';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const ProductDetailPage = ({ productsData }) => {
    const router = useRouter();
    const [allproducts, setProducts] = useState()
    const { products } = router.query;
    console.log('new', products);
    useEffect(() => {
        productsData?.map(item => {
            console.log('mm', item)
            // if (item.category_id = category_id) {
            // setProducts(item.name + ': ' + item.description)
            // console.log('mm', category_id)
            // }
        })
    }, [])
    return (
        <div className='container-xl p-4 mt-8'> <div class="sm:columns-1 md:column-2 lg:columns-2 ">
            <h2>{allproducts}</h2>
            {/* <div><Image
                src={productsData?.image_url}
                alt="Picture of the author"
                width={500}
                height={300}
            /></div> */}
            {/* <div>
                <h2 className="text-3xl mt-3 font-bold">{productsData?.title}</h2>
                <p className="text-xl mt-3 font-semibold">Category: {productsData?.category}</p>
                <p className="text-xl font-medium">rating:</p>
                <p className="text-xl font-medium">status:</p>
                <p className="text-xl font-medium">price:</p>
                <p className="text-xl font-medium">Brand:</p>
                <p className="text-xl font-medium">model:</p>
                <p className="text-xl font-medium">Specification:</p>
                <p className="text-xl font-medium">Port:</p>
                <p className="text-xl font-medium">Type:</p>
                <p className="text-xl font-medium">Resolution:</p>
                <p className="text-xl font-medium">Voltage:</p>
                <p className="text-xl font-medium">Individual rating:</p>
                <p className="text-xl font-medium">Average rating:</p>
                <p className="text-xl font-medium">Review:</p>
            </div> */}

        </div>

            {/* <div className='mt-8'>
                <h2 className='text-xl font-bold'>Product Description:</h2>
                <p>{productsData?.description}</p>
            </div> */}

            {/* <div className='mt-5'>
                <h2 className='text-xl font-bold'>Reviews:</h2>
                <p>{productsData?.review}</p>
            </div> */}

        </div>


    )
}
export default ProductDetailPage;


ProductDetailPage.getLayout = function getLayout(page) {
    return <RootLayouts>{page}</RootLayouts>;
};

// export const getStaticPaths = async () => {
//     const res = await fetch("http://localhost:3000/api/products");
//     const data = await res.json();
//     console.log('heydata', data);
//     const paths = data.data?.map((product) => ({
//         params: { productId: product.id },
//     }));
//     return { paths, fallback: false };
// }

// export const getStaticProps = async (context) => {
//     const { params } = context;
//     const res = await fetch(`http://localhost:3000/api/products/${params.productId}`);
//     const data = await res.json();
//     console.log(data);
//     return {
//         props: {
//             productsData: data
//         },
//         revalidate: 30,
//     }
// }

export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/products");
    const data = await res.json();
    console.log(data);
    return {
        props: {
            productsData: data.data
        },
        // revalidate: 30,
    }
}