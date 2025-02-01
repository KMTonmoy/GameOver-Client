'use client'
import React, { useEffect, useState } from 'react';

interface Blog {
    id: string
    title: string;
    author: string;
    creator: string;
    price: string;
    imageUrl: string;
    readLink: string;
}

const ThreeBlog: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        fetch('/three.json')
            .then(response => response.json())
            .then(data => setBlogs(data.blogs))
            .catch(error => console.error('Error fetching blog data:', error));
    }, []);

    return (
        <div className="container mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-8">🔥 Latest NFT Blogs</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                    <div key={index} className="bg-[#1A1F2A] border border-[#46C26C] rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                        <div className="relative">
                            <img src={blog.imageUrl} alt={blog.title} className="w-full h-40 object-cover rounded-lg" />
                            <span className="absolute top-3 right-3 bg-[#46C26C] text-white px-3 py-1 text-sm rounded-lg shadow">
                                {blog.price}
                            </span>
                        </div>

                        <div className="mt-4 text-white">
                            <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
                            <div className="flex items-center gap-3">
                                <img src={blog.imageUrl} alt={blog.author} className="w-12 h-12 rounded-full border-2 border-[#46C26C]" />
                                <p className="text-gray-300 text-lg">By: {blog.author}</p>
                            </div>

                            <a href={`blog/${blog.id}`}  >
                                <button className="mt-4 w-full bg-[#46C26C] text-white py-2 rounded-lg text-lg font-semibold hover:bg-green-600 transition">
                                    📖 Read Now
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ThreeBlog;
