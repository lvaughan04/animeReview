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
        $hardCode->name = 'Shonen';
        $hardCode->save();

        $hardCode = new Genre();
        $hardCode->name = 'Isekai';
        $hardCode->save();

        $hardCode = new Genre();
        $hardCode->name = 'Slice of Life';
        $hardCode->save();

        $hardCode = new Genre();
        $hardCode->name = 'Fantasy';
        $hardCode->save();

        $hardCode = new Genre();
        $hardCode->name = 'Romance';
        $hardCode->save();

        //Genre::factory()->count(50)->create();

    }
}
