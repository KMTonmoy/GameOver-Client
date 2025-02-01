'use client'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Banner {
    title: string;
    description: string;
    imageUrl: string;
    buttonLink: string;
}

const BannerCarousel: React.FC = () => {
    const [banners, setBanners] = useState<Banner[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch('/banner.json')
            .then(response => response.json())
            .then(json => setBanners(json))
            .catch(error => console.error('Error fetching banners:', error));
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [banners.length]);

    const goToPrevious = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + banners.length) % banners.length);
    };

    const goToNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <AnimatePresence mode="wait">
                {banners.length > 0 && (
                    <motion.div
                        key={currentIndex}
                        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${banners[currentIndex]?.imageUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ type: "tween", duration: 0.8 }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <div className="text-center text-white px-6 md:px-12">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">{banners[currentIndex]?.title}</h1>
                                <p className="text-lg md:text-xl mb-6">{banners[currentIndex]?.description}</p>
                                <a
                                    href={banners[currentIndex]?.buttonLink}
                                    className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
                onClick={goToPrevious}
            >
                &#60;
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
                onClick={goToNext}
            >
                &#62;
            </button>
        </div>
    );
};

export default BannerCarousel;