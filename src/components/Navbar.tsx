'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#182029] p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <p className="text-2xl font-bold text-white">Game<strong className='text-2xl font-bold text-[#43F17E]'>O</strong>ver</p>
                </div>

                <div className="hidden md:flex flex-grow justify-center space-x-6">
                    <Link href="/" className="relative text-white hover:text-[#43F17E] transition-colors duration-300">
                        <span>Home</span>
                        <motion.span
                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#43F17E]"
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                        />
                    </Link>
                    <Link href="/about" className="relative text-white hover:text-[#43F17E] transition-colors duration-300">
                        <span>About Us</span>
                        <motion.span
                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#43F17E]"
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                        />
                    </Link>
                    <Link href="/tournament" className="relative text-white hover:text-[#43F17E] transition-colors duration-300">
                        <span>Tournament</span>
                        <motion.span
                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#43F17E]"
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                        />
                    </Link>
                    <Link href="/pages" className="relative text-white hover:text-[#43F17E] transition-colors duration-300">
                        <span>Pages</span>
                        <motion.span
                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#43F17E]"
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                        />
                    </Link>
                    <Link href="/news" className="relative text-white hover:text-[#43F17E] transition-colors duration-300">
                        <span>News</span>
                        <motion.span
                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#43F17E]"
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                        />
                    </Link>
                    <Link href="/contact" className="relative text-white hover:text-[#43F17E] transition-colors duration-300">
                        <span>Contact</span>
                        <motion.span
                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#43F17E]"
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                        />
                    </Link>
                </div>

                <div className="hidden md:flex">
                    <Link href="/signin" className="text-white border border-[#43F17E] px-4 py-2 rounded hover:bg-[#43F17E] hover:text-[#182029] transition-colors duration-300">
                        Sign In
                    </Link>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-[#43F17E] focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed top-0 right-0 h-full w-64 bg-[#182029] shadow-lg"
                    >
                        <div className="flex justify-end p-4">
                            <button onClick={toggleMenu} className="text-[#43F17E] focus:outline-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col space-y-4 p-4">
                            <Link href="/" className="text-white hover:text-[#43F17E] transition-colors duration-300">
                                Home
                            </Link>
                            <Link href="/about" className="text-white hover:text-[#43F17E] transition-colors duration-300">
                                About Us
                            </Link>
                            <Link href="/tournament" className="text-white hover:text-[#43F17E] transition-colors duration-300">
                                Tournament
                            </Link>
                            <Link href="/pages" className="text-white hover:text-[#43F17E] transition-colors duration-300">
                                Pages
                            </Link>
                            <Link href="/news" className="text-white hover:text-[#43F17E] transition-colors duration-300">
                                News
                            </Link>
                            <Link href="/contact" className="text-white hover:text-[#43F17E] transition-colors duration-300">
                                Contact
                            </Link>
                            <Link href="/signin" className="text-white hover:text-[#43F17E] transition-colors duration-300">
                                Sign In
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;