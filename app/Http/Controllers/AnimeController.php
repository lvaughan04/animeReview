<?php

namespace App\Http\Controllers;

use App\Models\Anime;
use App\Models\Genre;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnimeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $animes = Anime::all();
        //dd($animes);
        return Inertia::render('Anime/Index', ['animes' => $animes]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $genres = Genre::all();
        return Inertia::render('Anime/Create', ['genres' => $genres]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        $validatedData = $request->validate([
            'title' => 'required|max:60', //255 characters
            'description' => 'required|string',
            // 'genres' => 'required|array',
            // 'genres.*' => 'exists:genres,id' 
        ]);

        //come back to work on genres and how they relate
        $newAnime = new Anime;
        $newAnime->description = $validatedData['description'];
        $newAnime->title = $validatedData['title'];
        $newAnime->save();

        //$newAnime->genres()->attach($request->genres);

        return Inertia::location(route('animes.index'));    
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $anime = Anime::findorFail($id);
        //dd($anime);
        return Inertia::render('Anime/Show', ['anime' => $anime]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
