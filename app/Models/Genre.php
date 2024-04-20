<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Genre extends Model
{
    use HasFactory;

    /**
     * An anime could have multiple genres and a genre could have multiple animes
     * Many to Many Relationship
     */
    public function animes() : BelongsToMany
    {
        return $this->belongsToMany(Anime::class);    
    }
}
