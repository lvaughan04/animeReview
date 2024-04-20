<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $this->call(UserTableSeeder::class);
        $this->call(GenreTableSeeder::class);
        $this->call(AnimeTableSeeder::class);
        // $this->call(PostTableSeeder::class); //don't need to call this method because the users are being seeded with 3 posts already
        $this->call(CommentTableSeeder::class);
        $this->call(RatingTableSeeder::class);
    }
}
