<?php

namespace Database\Seeders;

use App\Models\Genre;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GenreTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $hardCode = new Genre();
        $hardCode->name = 'shonen';
        $hardCode->save();

        Genre::factory()->count(50)->create();

    }
}
