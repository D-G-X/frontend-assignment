import { useState } from 'react';
import '../styles/Navbar.css';

function Navbar(){
    const [ctaToggle, setCtaToggle] = useState(false)
    return (
        <>
        <div className="p-3 flex flex-row pr-10">
            <span className="font-bold md:text-lg lg:text-3xl brand-logo pl-14 inline-block basis:1/2 md:basis-1/4 self-center">
                Brand Logo
            </span>
            <div className='md:hidden basis-3/4'>
                    <button className='float-right' type='button' onClick={()=>setCtaToggle(!ctaToggle)}><HamburgerButton /></button>
            </div>
            <nav className="md:flex justify-between basis-3/4 hidden">
                <div className='align-middle inline-block'>
                    <a href="/" className='navbar-links inline-block w-16 text-center text-sm py-2'>Home</a>
                    <a href="/" className='navbar-links inline-block w-16 text-center text-sm py-2'>Product</a>
                    <a href="/" className='navbar-links inline-block w-16 text-center text-sm py-2'>Pricing</a>
                    <a href="/" className='navbar-links inline-block w-16 text-center text-sm py-2'>FAQ</a>
                    <a href="/" className='navbar-links inline-block w-16 text-center text-sm py-2'>Blog</a>
                </div>
                <div className='inline-block login-signup align-middle'>
                    <a href="/" className='navbar-links inline-block w-20 text-center text-sm py-2'>Log in</a>
                    <a href="/" className='inline-block signup bg-[#5663da] p-1 rounded-md'>Sign up</a>
                </div>
            </nav>
        </div>
         {
            ctaToggle?(
            <div className="md:hidden text-center mb-5">
                <div className='align-middle space-y-1'>
                    <div>
                        <a href="/" className='text-center text-md py-2'>Home</a>
                    </div>
                    <div>
                        <a href="/" className='text-center text-md py-2'>Product</a>
                    </div>
                    <div>
                        <a href="/" className='text-center text-md py-2'>Pricing</a>
                    </div>
                    <div>
                        <a href="/" className='text-center text-md py-2'>FAQ</a>
                    </div>
                    <div>
                        <a href="/" className='text-center text-md py-2'>Blog</a>
                    </div>
                </div>
                <div className='flex justify-center space-x-4 mt-2'>
                    <a href="/" className='inline-block text-center text-sm p-2 '>Log in</a>
                    <a href="/" className='inline-block signup bg-[#5663da] hover:text-[#5663da] hover:bg-transparent hover:border-[#5663da] p-1 rounded-md'>Sign up</a>
                </div>
            </div>
            ):null
        }
        </>
    )
}

function HamburgerButton(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

    )
}

export default Navbar;