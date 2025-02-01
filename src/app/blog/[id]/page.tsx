'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface Blog {
    id: string;
    title: string;
    author: string;
    creator: string;
    price: string;
    imageUrl: string;
    description: string;  
}

const BlogDetails: React.FC = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState<Blog | null>(null);

    useEffect(() => {
        fetch('/three.json')
            .then(response => response.json())
            .then(data => {
                const foundBlog = data.blogs.find((b: Blog) => b.id === id);
                setBlog(foundBlog);
            })
            .catch(error => console.error('Error fetching blog data:', error));
    }, [id]);

    if (!blog) {
        return <div className="text-white text-center py-20 text-xl">Loading...</div>;
    }

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="flex flex-col lg:flex-row max-w-3xl mx-auto bg-[#1A1F2A] border border-[#46C26C] rounded-xl p-6 shadow-lg">
                <div className="lg:w-1/2">
                    <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="w-full h-80 object-cover rounded-lg shadow-xl"
                    />
                </div>
                <div className="lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
                    <h1 className="text-4xl font-bold text-white">{blog.title}</h1>
                    <p className="text-gray-300 mt-2">By {blog.author}</p>
                    <span className="inline-block bg-[#46C26C] text-white px-3 py-1 mt-4 rounded-lg">
                        {blog.price}
                    </span>
                    <p className="text-gray-400 mt-4">{blog.description}</p>
                    <div className="mt-4 text-gray-300">
                        <p className="text-lg">Creator: {blog.creator}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
