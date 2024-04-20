<?php

namespace Database\Seeders;

use App\Models\Anime;
use Database\Factories\AnimeFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AnimeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $animeVal = new Anime();
        $animeVal->title = 'Naruto';
        $animeVal->description = 'This show is about a boy who has no parents and is mockery to the village';
        $animeVal->genre_id = 1;
        $animeVal->save();

        Anime::factory()->count(50)->create();
    }
}
