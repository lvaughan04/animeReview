<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AnimeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\CommentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

//anime routes


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/animes', [AnimeController::class, 'index'])->name('animes.index');
Route::get('/animes/create', [AnimeController::class,'create'])->name('animes.create');
Route::post('/animes', [AnimeController::class,'store']);
Route::get('animes/{id}', [AnimeController::class, 'show'])->name('animes.show');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/posts', [PostController::class, 'index'])->name('posts.index');
    Route::get('/posts/create', [PostController::class,'create'])->name('posts.create');
    Route::post('/posts', [PostController::class,'store'])->name('posts.store');
    Route::get('/posts/{id}', [PostController::class,'show'])->name('posts.show');

    Route::get('posts/{post}/comments', [CommentController::class, 'index'])->name('comments.index');
    Route::get('/posts/{post}/comments/create', [CommentController::class,'create'])->name('comments.create');
    Route::post('/posts/{post}/comments', [CommentController::class,'store'])->name('comments.store');
    Route::get('/posts/{post}/comments/{id}', [CommentController::class,'show'])->name('comments.show');

    //ratings route
    Route::get('animes/{anime}/ratings', [RatingController::class, 'index'])->name('ratings.index');
    Route::get('/animes/{anime}/ratings/create', [RatingController::class,'create'])->name('ratings.create');
    Route::post('/animes/{anime}/ratings', [RatingController::class,'store'])->name('ratings.store');
    Route::get('/animes/{anime}/ratings/{id}', [RatingController::class,'show'])->name('ratings.show');
});

require __DIR__.'/auth.php';
