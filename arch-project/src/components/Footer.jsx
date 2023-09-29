import React from 'react'
import logo from '../assets/logo-arch.svg'

const Footer = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between md:px-32 px-5 p-4 m-2'>
            <div className='flex flex-row items-center gap-12 text-lightText p-2'>
                <nav className='flex flex-col md:flex-row gap-10'>
                    <a className='hover:text-brightRed transition-all' href="/About Us">About Us</a>
                    <a className='hover:text-brightRed transition-all' href="/How it Works">How it Works</a>
                    <a className='hover:text-brightRed transition-all' href="/FAQ">FAQ</a>
                    <a className='hover:text-brightRed transition-all' href="/Contact Us">Contact Us</a>
                    <a className='hover:text-brightRed transition-all' href="/Privacy Policy">Privacy Policy</a>
                </nav>
            </div>

            <div className='flex flex-row items-centerp-2 gap-4'>
                <img src={logo} alt="" />
            </div>
        </div>
    )
}

export default Footer