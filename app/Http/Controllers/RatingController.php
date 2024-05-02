<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Anime;
use App\Models\Rating;
use Inertia\Inertia;

class RatingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($id)
    {
        $anime = Anime::with(['ratings', 'ratings.user'])->findOrFail($id);
        return Inertia::render('Ratings/Index', ['anime' => $anime,'ratings' => $anime->ratings]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($animeID)
    {
        $anime = Anime::with('ratings')->findOrFail($animeID);
        return Inertia::render('Ratings/Create', ['anime' => $anime->id]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'reviewContent' => 'required|max:500', 
            'score' => 'required|integer|min:1|max:10',
        ]);

        //come back to work on genres and how they relate
        $rating = new Rating();
        $rating->score = $validatedData['score'];
        $rating->reviewContent = $validatedData['reviewContent'];
        $rating->user_id = auth()->id(); // Assuming you want to save which user submitted the rating
        $rating->anime_id = $request->id; // Ensure you have this field in your form if it's needed
        $rating->save();

        return redirect()->route('animes.show', ['id' => $request->id])
                     ->with('success', 'Rating submitted successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
