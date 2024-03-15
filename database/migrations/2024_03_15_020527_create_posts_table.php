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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('userID')->unsigned();
            $table->bigInteger('animeID')->unsigned();
            $table->string('title'); //gonna use this in the url later
            $table->string('content');
            $table->timestamps();

            $table->foreign('userID')->references('id')->on('users')
                ->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('animeID')->references('id')->on('animes')
                ->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
