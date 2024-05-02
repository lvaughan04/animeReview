import React, { useState } from "react";
import { router } from '@inertiajs/react'

function CreateAnimeForm({ genres }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedGenres, setSelectedGenres] = useState([]); // Selected genres array

    const handleGenreChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        setSelectedGenres(selectedOptions);
    };

    // Function runs when submit button is clicked
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting:', { title, description, genres: selectedGenres });
        router.post('/animes', { title, description, genres: selectedGenres });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                    Anime Title:
                </label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                    Description:
                </label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="genres" className="block text-gray-700 text-sm font-bold mb-2">
                    Genres
                </label>
                <select
                    id="genres"
                    multiple
                    value={selectedGenres}
                    onChange={handleGenreChange}
                    required
                    size={genres.length || 5}
                    className="block w-full border bg-white rounded py-2 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                    {genres.map(genre => (
                        <option key={genre.id} value={genre.name}>
                            {genre.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Add Anime
            </button>
        </form>
    );
}

export default CreateAnimeForm;