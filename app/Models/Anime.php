<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Anime extends Model
{
    use HasFactory;

    /**
     * Get the ratings for an anime
     * (One to Many)
     */
    public function ratings() : HasMany 
    {
        return $this->hasMany(Rating::class);
    } 

    /**
     * Get all genres for an Anime
     * Many to Many
     */
    public function genres() : BelongsToMany
    {
        return $this->belongsToMany(Genre::class);
    }
}
