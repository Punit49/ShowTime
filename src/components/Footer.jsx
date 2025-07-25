import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import '../components/stylesheets/header.css'

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-36 mt-40 w-full text-gray-300">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-14">
                <div className="md:max-w-96">
                    <Link to="/" className='max-md:flex-1 logoBox logoBox2'>
                        <img src={assets.Preview} alt="Logo" className='h-18 w-10' />
                        <p>howTime</p>
                    </Link>
                    <p className="mt-6 text-sm">
                        ShowTime is a modern and user-friendly movie ticket booking app that lets users browse the latest movies, view showtimes, and book seats instantly. With real-time updates and a seamless booking experience, ShowTime makes planning your movie night easy and hassle-free.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                        <img src={assets.googlePlay} alt="google play" className="h-9 w-auto" />
                        <img src={assets.appStore} alt="app store" className="h-9 w-auto" />
                    </div>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a onClick={()=> {scrollTo(0,0)}} href="/">Home</a></li>
                            <li><a onClick={()=> {scrollTo(0,0)}} href="/about-us">About us</a></li>
                            <li><a onClick={()=> {scrollTo(0,0)}} href="/contact-us">Contact us</a></li>
                            <li><a onClick={()=> {scrollTo(0,0)}} href="/movies">Movies</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+919999999</p>
                            <p>showtimeOfficial@gmail.com</p>
                        </div>
                        <a
                            href="https://github.com/Punit49/ShowTime.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-blue-300"
                            >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()} © ShowTime. All Right Reserved.
            </p>
        </footer>
  )
}

export default Footer