import Link from 'next/link';
import { MdAccountCircle } from 'react-icons/md';
const Navbar = () => {
    return (
        <div>   <div className="navbar bg-red-500">
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
                        <li><Link href='/featured'>Featured</Link></li>
                        <li><Link href='/about'>About</Link></li>
                        <li><Link href='/contact'>Contact</Link></li>
                        <li>
                            <a><MdAccountCircle /> Account</a>
                            <ul className="p-2">
                                <li><a>Login</a></li>

                            </ul>
                        </li>
                    </ul>
                </div>
                <Link href='/' className="btn btn-ghost normal-case text-xl">Tech-BD</Link>
            </div>

            <div className="navbar-end">
                <Link href='/pc_builder' className="btn">PC Builder</Link>
            </div>

        </div>
            <div className="navbar-center hidden lg:flex justify-between shadow-lg shadow-indigo-500/40 ">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>

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
                    <li><Link href='/featured'>Featured</Link></li>
                    <li><Link href='/about'>About</Link></li>
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
                        <button className='btn btn-sm btn-outline flex align-middle justify-center items-center gap-1'>  <MdAccountCircle /> Account</button>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Login

                                </a>
                            </li>


                        </ul>
                    </div>
                </ul>
            </div></div>
    )
}

export default Navbar