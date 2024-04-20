<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $postVal = new Post();
        $postVal->title = 'I have a question';
        $postVal->content = 'Is this a good anime?';
        $postVal->user_id = 1;
        $postVal->save();

        Post::factory()->count(50)->create();

    }
}
