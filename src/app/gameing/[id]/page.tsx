'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface Game {
    id: string;
    gameName: string;
    description: string;
    companyName: string;
    imageUrl: string;
    downloadLink: string;
    warning: string;
}

const GameDetails: React.FC = () => {
    const { id } = useParams();
    const [game, setGame] = useState<Game | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setLoading(true);
        fetch('/GamingBlog.json')  // Ensure the correct path to your data file
            .then(response => response.json())
            .then(data => {
                const foundGame = data.games.find((b: Game) => b.id === id);
                if (foundGame) {
                    setGame(foundGame);
                } else {
                    setError('Game not found');
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching game data:', error);
                setError('An error occurred while fetching game data.');
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="text-white text-center py-20 text-xl">Loading...</div>;
    }

    if (error) {
        return <div className="text-white text-center py-20 text-xl">{error}</div>;
    }

    if (!game) {
        return <div className="text-white text-center py-20 text-xl">Game not found</div>;
    }

    return (
        <div className="container mx-auto py-10 px-4 min-h-screen flex flex-col justify-center">
            <div className="flex flex-col lg:flex-row max-w-7xl mx-auto bg-[#1A1F2A] border border-[#46C26C] rounded-xl p-8 shadow-2xl">
                <div className="lg:w-1/2">
                    <img
                        src={game.imageUrl}
                        alt={`Image of ${game.gameName}`}
                        className="w-full h-96 object-cover rounded-lg shadow-2xl"
                    />
                </div>
                <div className="lg:w-1/2 lg:pl-12 mt-6 lg:mt-0 text-white">
                    <h1 className="text-5xl font-extrabold">{game.gameName}</h1>
                    <p className="text-lg text-gray-300 mt-2">By {game.companyName}</p>
                    <span className="inline-block bg-[#46C26C] text-white px-4 py-2 mt-4 rounded-xl text-lg font-medium">
                        {game.warning}
                    </span>
                    <p className="text-lg text-gray-400 mt-6">{game.description}</p>
                    <div className="mt-6">
                        <p className="text-xl">Download Link: 
                            <a href={game.downloadLink} target="_blank" rel="noopener noreferrer" className="text-[#42EA7C] hover:text-[#36b85d] font-semibold">
                                {game.downloadLink}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;
