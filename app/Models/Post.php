<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    use HasFactory;

    /**
     * A user can make many posts, but a post can only belong to one user
     * One to Many Relationship with User
    */
    public function user() : BelongsTo 
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Gets comments from a Post
     * One to Many Relationship
     */
    public function comments(): HasMany 
    {
        return $this->hasMany(Comment::class);
    }

}
