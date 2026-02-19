import React from "react";
import { Facebook, Instagram, Twitter, Music2 } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full bg-[#f3f3f3] px-4 md:px-8 pt-10 pb-6 flex justify-center">
            <div className="w-full max-w-7xl">
                {/* Top Blue Section */}
                <div className="bg-gradient-to-r from-[#5B6EE1] to-[#4E63D9] rounded-t-3xl p-6 pb-12 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    {/* Left Content */}
                    <div className="text-white max-w-xl">
                        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
                            JOIN OUR KICKSPLUS <br /> CLUB & GET 15% OFF
                        </h2>
                        <p className="mt-4 text-sm md:text-base text-white/90">
                            Sign up for free! Join the community.
                        </p>

                        <div className="mt-6 flex w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 px-4 py-3 rounded-lg bg-transparent border border-white/60 text-white placeholder-white/70 focus:outline-none"
                            />
                            <button className="px-6 ml-1 py-3 bg-black text-white text-sm font-semibold rounded-lg hover:opacity-90 transition">
                                SUBMIT
                            </button>
                        </div>
                    </div>

                    {/* Right Logo */}
                    <div className="text-white flex relative text-5xl md:text-7xl font-extrabold tracking-tight">
                        <img src="./src/assets/FooterTopLogo.svg" alt="" className="" />
                        <img src="/src/assets/Add_circle.svg" alt="" className="absolute -right-5 -top-5" />
                        {/* <span className="absolute -top-2 -right-5 bg-orange-400 rounded-full text-[#4E63D9]">+</span> */}
                    </div>
                </div>

                {/* Bottom Dark Section */}
                <div className="relative -top-5 bg-[#1f1f1f] text-white rounded-3xl p-6 md:p-12 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10 pb-30 md:pb-55">
                        {/* About */}
                        <div>
                            <h3 className="text-orange-400 font-semibold text-lg">About us</h3>
                            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                                We are the biggest hyperstore in the universe. We got you all
                                cover with our exclusive collections and latest drops.
                            </p>
                        </div>

                        {/* Categories */}
                        <div>
                            <h3 className="text-orange-400 font-semibold text-lg">Categories</h3>
                            <ul className="mt-4 space-y-2 text-sm text-gray-300">
                                <li>Runners</li>
                                <li>Sneakers</li>
                                <li>Basketball</li>
                                <li>Outdoor</li>
                                <li>Golf</li>
                                <li>Hiking</li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-orange-400 font-semibold text-lg">Company</h3>
                            <ul className="mt-4 space-y-2 text-sm text-gray-300">
                                <li>About</li>
                                <li>Contact</li>
                                <li>Blogs</li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h3 className="text-orange-400 font-semibold text-lg">Follow us</h3>
                            <div className="flex items-center gap-4 mt-4 text-gray-300">
                                <Facebook size={18} />
                                <Instagram size={18} />
                                <Twitter size={18} />
                                <Music2 size={18} />
                            </div>
                        </div>
                    </div>

                    {/* Big Background Text */}
                    <div className="absolute bottom-0 left-0 w-full text-[80px] md:text-[200px] font-extrabold text-white/5 leading-none select-none pointer-events-none">
                        <img src="./src/assets/LogoFooter.svg" alt="" className="mx-auto" />
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-md text-gray-500 mt-6">
                    © All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;