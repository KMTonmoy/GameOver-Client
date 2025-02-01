'use client';
import React, { useEffect, useState } from 'react';

interface Streamer {
    id: string;
    name: string;
    description: string;
    channel: string;
    imageUrl: string;
}

const TopSteamers: React.FC = () => {
    const [streamers, setStreamers] = useState<Streamer[]>([]);

    useEffect(() => {
        // Fetch the data from the JSON file
        fetch('/streamers.json')
            .then((response) => response.json())
            .then((data) => setStreamers(data.streamers))
            .catch((error) => console.error('Error fetching streamer data:', error));
    }, []);

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="text-center mb-10">
                <p className="text-[#42EA7C] font-semibold text-[14px]">Know about us</p>
                <h1 className="text-white font-extrabold text-[45px]">Top Rated Steamers</h1>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {streamers.map((streamer) => (
                    <div
                        key={streamer.id}
                        className="bg-[#1A1F2A] border border-[#46C26C] rounded-xl p-6 shadow-lg hover:shadow-xl transition"
                    >
                        <img
                            src={streamer.imageUrl}
                            alt={streamer.name}
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="text-2xl font-semibold text-white mt-4">{streamer.name}</h3>
                        <p className="text-gray-300 mt-2">{streamer.description}</p>
                        <a
                            href={streamer.channel}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#46C26C] mt-4 inline-block underline"
                        >
                            Visit Channel
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopSteamers;
