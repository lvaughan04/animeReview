<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rating>
 */
class RatingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'reviewContent'=>fake()->sentence(),
            'score'=>fake()->numberBetween(0, 10),
            'user_id'=>1,
            'anime_id'=>1
        ];
    }
}
