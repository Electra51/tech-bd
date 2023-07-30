/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { MdAccountCircle } from 'react-icons/md';
import { useSession, signOut } from "next-auth/react";
const Navbar = () => {
    const { data: session } = useSession()
    console.log('hi', session)
    return (
        <div>   <div className="navbar bg-[#32BD8F]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href='/'>Home</Link></li>
                        <li>
                            <a>Categories</a>
                            <ul className="p-2">
                                <li><Link href='/cpu'>CPU</Link></li>
                                <li><Link href='/mother-board'>MotherBoard</Link></li>
                                <li><Link href='/ram'>RAM</Link></li>
                                <li><Link href='/power-supply-unit'>Power Supply Unit</Link></li>
                                <li><Link href='/storage-device'>Storage Device</Link></li>
                                <li><Link href='/monitor'>Monitor</Link></li>
                                <li><Link href='/mouses'>Mouses</Link></li>
                                <li><Link href='/keyboard'>KeyBoard</Link></li>
                            </ul>
                        </li>
                        <li><Link href='/products'>All Products</Link></li>
                        <li><a href='#featured'>Featured</a></li>
                        <li><Link href='/contact'>Contact</Link></li>
                        <li>
                            <a><MdAccountCircle /> Account</a>
                            <ul className="p-2">
                                <li><a>Login</a></li>

                            </ul>
                        </li>
                    </ul>
                </div>
                <Link href='/' className="text-[#3a3768] font-bold text-xl">Tech-BD</Link>
            </div>

            <div className="navbar-end">
                <Link href='/pc_builder' className="btn" style={{ background: '#3a3768', color: 'white' }}>PC Builder</Link>
            </div>

        </div>
            <div className="navbar-center hidden lg:flex justify-between shadow-lg shadow-[#bce3d6]">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href='/'>Home</Link></li>

                    <li tabIndex={0}>
                        <details>
                            <summary>Categories</summary>
                            <ul className=" flex ">
                                <div>  <li><Link href='/cpu'>CPU</Link></li>
                                    <li><Link href='/mother-board'>MotherBoard</Link></li>
                                    <li><Link href='/ram'>RAM</Link></li>
                                    <li><Link href='/power-supply-unit'>Power Supply Unit</Link></li>
                                </div>
                                <div> <li><Link href='/storage-device'>Storage Device</Link></li>
                                    <li><Link href='/monitor'>Monitor</Link></li>
                                    <li><Link href='/mouses'>Mouses</Link></li>
                                    <li><Link href='/keyboard'>KeyBoard</Link></li></div>
                            </ul>
                        </details>
                    </li>
                    <li><Link href='/products'>All Products</Link></li>
                    <li><a href='#featured'>Featured</a></li>
                    <li><Link href='/contact'>Contact</Link></li>
                </ul>
                <ul className="menu menu-horizontal px-1">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="md:w-full input input-bordered input-sm w-full max-w-xs" />
                    </div>
                    <label tabIndex={0} className="btn btn-sm btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>

                        </div>
                    </label>
                    <div className="dropdown dropdown-end">
                        {session?.user ? <> <button className='flex align-middle justify-center items-center gap-1'> <div className="avatar">
                            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={session?.user.image} />
                            </div>
                        </div></button>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link href='/profile' className="justify-between">
                                        Profile

                                    </Link>
                                </li>
                                <li>
                                    <Link href='/login' onClick={() => signOut()} className="justify-between">
                                        Log Out

                                    </Link>
                                </li>


                            </ul></> : <> <button className='btn btn-sm btn-outline flex align-middle justify-center items-center gap-1'>  <MdAccountCircle /> Account</button>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link href='/login' className="justify-between">
                                        Login

                                    </Link>
                                </li>


                            </ul></>}
                    </div>
                </ul>
            </div></div>
    )
}

export default Navbar