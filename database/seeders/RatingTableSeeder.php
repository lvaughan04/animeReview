<?php

namespace Database\Seeders;

use App\Models\Rating;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RatingTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $ratingVal = new Rating();
        $ratingVal->reviewContent = 'Top 5 of all time';
        $ratingVal->score = 9;
        $ratingVal->user_id = 1;
        $ratingVal->anime_id = 1;
        $ratingVal->save();

        Rating::factory()->count(50)->create();

    }
}
