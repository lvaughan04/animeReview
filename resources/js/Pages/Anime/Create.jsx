import React, { useState } from "react";
import { router } from '@inertiajs/react'
//import { Inertia } from "@inertiajs/react";

function CreateAnimeForm({genres}){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedGenres, setSelectedGenres] = useState([]); //selected genres array

    const handleGenreChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        setSelectedGenres(selectedOptions);
    };

    //function runs when submit button is clicked
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting:', { title, description, genres: selectedGenres });
        router.post('/animes', { title, description, genres: selectedGenres });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Anime Title: </label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description: </label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="genres">Genres</label>
                <select
                    id="genres"
                    multiple
                    value={selectedGenres}
                    onChange={handleGenreChange}
                    required
                    size={genres.length || 5}  // Dynamically sets the size based on the number of genres passed as props
                >
                    {genres.map(genre => (
                        <option key={genre.id} value={genre.name}>
                            {genre.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Add Anime</button>
        </form>
    );
}

export default CreateAnimeForm;
