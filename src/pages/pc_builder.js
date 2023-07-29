import RootLayouts from '@/components/layouts/RootLayouts';
import Image from 'next/image';
import React from 'react'

import img5 from '../assets/6.png';

const PCBuilderPage = () => {
    return (
        <div className='m-10' style={{ border: '1px solid red' }}>
            <>Your Build PC</>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <Image
                                                src={img5}
                                                alt="Picture of the author"
                                                width={1200}
                                                height={500}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>

                            </td>
                            <td></td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Select</button>
                            </th>
                        </tr>
                        {/* row 2 */}
                        <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <Image
                                                src={img5}
                                                alt="Picture of the author"
                                                width={1200}
                                                height={500}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Brice Swyre</div>
                                        <div className="text-sm opacity-50">China</div>
                                    </div>
                                </div>
                            </td>
                            <td>

                            </td>
                            <td></td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Select</button>
                            </th>
                        </tr>
                        {/* row 3 */}
                        <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <Image
                                                src={img5}
                                                alt="Picture of the author"
                                                width={1200}
                                                height={500}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Marjy Ferencz</div>
                                        <div className="text-sm opacity-50">Russia</div>
                                    </div>
                                </div>
                            </td>
                            <td>

                            </td>
                            <td></td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Select</button>
                            </th>
                        </tr>
                        {/* row 4 */}
                        <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <Image
                                                src={img5}
                                                alt="Picture of the author"
                                                width={1200}
                                                height={500}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Yancy Tear</div>
                                        <div className="text-sm opacity-50">Brazil</div>
                                    </div>
                                </div>
                            </td>
                            <td>

                            </td>
                            <td></td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Select</button>
                            </th>
                        </tr>
                    </tbody>


                </table>
            </div>
        </div>
    )
}

export default PCBuilderPage;

PCBuilderPage.getLayout = function getLayout(page) {
    return <RootLayouts>{page}</RootLayouts>;
};
