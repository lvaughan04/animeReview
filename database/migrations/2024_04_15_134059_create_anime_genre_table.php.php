<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('anime_genre', function (Blueprint $table) {
            $table->primary(['genre_id', 'anime_id']);
            $table->bigInteger('anime_id')->unsigned();
            $table->bigInteger('genre_id')->unsigned();
            $table->timestamps();

            $table->foreign('anime_id')->references('id')->on('animes')
                ->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('genre_id')->references('id')->on('genres')
                ->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('anime_genre');
    }
};
