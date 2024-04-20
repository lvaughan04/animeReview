<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comment extends Model
{
    use HasFactory;

    /**
     * Get the Post from the comment 
     * One to Many
     */

     public function post() : BelongsTo 
     {
        return $this->belongsTo(Post::class);
     }

     /**
      * Get all comments from a user
      */
    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class);
    }

}
