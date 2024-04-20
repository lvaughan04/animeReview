<?php

namespace Database\Seeders;

use App\Models\Comment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $commentVal = new Comment();
        $commentVal->content = 'I think this is a great anime';
        $commentVal->user_id = 1;
        $commentVal->post_id = 1;
        $commentVal->save();

        Comment::factory()->count(50)->create();

    }
}
