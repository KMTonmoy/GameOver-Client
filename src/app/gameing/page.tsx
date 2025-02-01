'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Game {
    id: string;
    gameName: string;
    description: string;
    imageUrl: string;
    downloadLink: string;
}

const GamingBlog: React.FC = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const [visibleGamesCount, setVisibleGamesCount] = useState<number>(6);

    useEffect(() => {
        fetch('/GamingBlog.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setGames(data.games);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const handleShowMore = () => {
        setVisibleGamesCount((prevCount) => prevCount + 6);
    };

    const handleShowLess = () => {
        setVisibleGamesCount(6);
    };

    if (loading) {
        return <div className="text-center text-xl text-white">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-xl text-red-500">{error}</div>;
    }

    return (
        <div className="p-6 bg-[#1A1F2A] min-h-screen">
            <div className="text-center mb-12">
                <p className="text-[#42EA7C] font-bold text-lg">Gaming Blog</p>
                <h1 className="text-white font-extrabold text-4xl">Top Rated Games</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {games.slice(0, visibleGamesCount).map((game) => (
                    <div
                        key={game.id}
                        className="bg-[#232A34] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                        <img
                            src={game.imageUrl}
                            alt={game.gameName}
                            className="w-full h-56 object-cover transition-all duration-300 transform hover:scale-110"
                        />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold text-white">{game.gameName}</h2>
                            <p className="text-sm text-gray-400 mt-2">{game.description}</p>
                            <div className="mt-4">
                                <Link
                                    href={`/gameing/${game.id}`}
                                    className="bg-[#42EA7C] text-white px-6 py-2 rounded-lg inline-block hover:bg-[#36b85d] transition-all duration-300"
                                >
                                    Read Now
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-6">
                {visibleGamesCount < games.length ? (
                    <button
                        onClick={handleShowMore}
                        className="bg-[#42EA7C] text-white px-6 py-2 rounded-lg inline-block hover:bg-[#36b85d] transition-all duration-300"
                    >
                        Show More
                    </button>
                ) : (
                    <button
                        onClick={handleShowLess}
                        className="bg-[#42EA7C] text-white px-6 py-2 rounded-lg inline-block hover:bg-[#36b85d] transition-all duration-300"
                    >
                        Show Less
                    </button>
                )}
            </div>
        </div>
    );
};

export default GamingBlog;
