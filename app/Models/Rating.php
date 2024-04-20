<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Rating extends Model
{
    use HasFactory;

    /**
     * A rating can be made by one user to only one anime
     * One to One Relationship
     */

     /**
      * Get the ratings from a user
      */
      public function user() : BelongsTo 
      {
        return $this->belongsTo(User::class);
      }

      /**
       * Get the ratings from an anime
       */
      public function anime() : BelongsTo
      {
        return $this->belongsTo(Anime::class);
      }
}
