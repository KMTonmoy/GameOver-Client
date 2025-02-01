import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0f1218] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
                    {/* Left Section: Logo & Description */}
                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="text-3xl font-bold text-[#46C26C]">GameOver</h1>
                        <p className="mt-2 text-gray-400 max-w-sm text-center md:text-left">
                            Discover, explore, and play the best games with us. Stay connected for new updates and more.
                        </p>
                    </div>

                    {/* Center Section: Navigation Links */}
                    <div className="flex flex-col items-center md:items-start space-y-2">
                        <h2 className="text-lg font-semibold">Quick Links</h2>
                        <ul className="space-y-1 text-gray-300">
                            <li><Link href="/" className="hover:text-[#46C26C]">Home</Link></li>
                            <li><Link href="/about" className="hover:text-[#46C26C]">About Us</Link></li>
                            <li><Link href="/games" className="hover:text-[#46C26C]">Games</Link></li>
                            <li><Link href="/contact" className="hover:text-[#46C26C]">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Right Section: Social Media Icons */}
                    <div className="flex space-x-4 text-gray-300">
                        <Link href="#" className="hover:text-[#46C26C]">
                            <i className="fab fa-facebook-f text-2xl"></i>
                        </Link>
                        <Link href="#" className="hover:text-[#46C26C]">
                            <i className="fab fa-twitter text-2xl"></i>
                        </Link>
                        <Link href="#" className="hover:text-[#46C26C]">
                            <i className="fab fa-instagram text-2xl"></i>
                        </Link>
                        <Link href="#" className="hover:text-[#46C26C]">
                            <i className="fab fa-linkedin-in text-2xl"></i>
                        </Link>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="mt-8 text-center text-gray-400">
                    <p>&copy; 2025 YourCompany. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
