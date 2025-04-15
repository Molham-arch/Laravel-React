<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class codesnippetsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->name(),
            'CodingLanguage' => fake()->languageCode(),
            'content' => fake()->text($maxNbChars = 200),
            'description' => fake()->text($maxNbChars = 400),
            'status' => 1
        ];
    }
}
