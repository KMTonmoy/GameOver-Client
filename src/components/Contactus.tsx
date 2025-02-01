import React from 'react';

const Contactus = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#1A1F2A]">
            <div className="flex w-full flex-col lg:flex-row max-w-6xl mx-auto bg-[#1A1F2A] rounded-xl shadow-2xl p-6">
                {/* Left side: Image */}
                <div className="lg:w-1/2">
                    <img
                        src="https://www.miniaturemanors.co.uk/wp-content/uploads/2023/05/First-Contact-Start-to-Garden-Games-Room.jpg.webp"
                        alt="Contact Us Image"
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                    />
                </div>

                {/* Right side: Form */}
                <div className="lg:w-1/2 lg:pl-10 mt-6 lg:mt-0">
                    <h2 className="text-4xl font-bold text-white">Contact Us</h2>
                    <p className="text-gray-300 mt-2 mb-6">We would love to hear from you!</p>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-white text-lg" htmlFor="name">Your Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full p-3 mt-2 rounded-lg bg-[#2E353F] text-white focus:outline-none focus:ring-2 focus:ring-[#46C26C] transition"
                            />
                        </div>
                        <div>
                            <label className="block text-white text-lg" htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 mt-2 rounded-lg bg-[#2E353F] text-white focus:outline-none focus:ring-2 focus:ring-[#46C26C] transition"
                            />
                        </div>
                        <div>
                            <label className="block text-white text-lg" htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                placeholder="Write your message"
                                className="w-full p-3 mt-2 rounded-lg bg-[#2E353F] text-white focus:outline-none focus:ring-2 focus:ring-[#46C26C] transition"
                                rows={4}
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-[#46C26C] text-white rounded-lg hover:bg-[#36b85d] transition"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contactus;
