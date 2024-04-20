<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        //Going to have to update postID later when I figure out how to implement the logic; short on time

        return [
            'content'=>fake()->sentence(),
            'post_id'=>1,
            'user_id'=>1,
        ];
    }
}
