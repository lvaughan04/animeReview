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
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('postID')->unsigned();
            $table->bigInteger('userID')->unsigned();
            $table->string('content');
            $table->timestamps();

            $table->foreign('postID')->references('id')->on('posts')
                ->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('userID')->references('id')->on('users')
                ->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
