<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CodeSnippetController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\CodeSnippet;

// 🌐 Home + statische pagina's
Route::get('/', fn() => Inertia::render('Welcome'))->name('welcome');
Route::get('/dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard');
Route::get('/faq', fn() => Inertia::render('FAQ'))->name('faq');

// 🔐 Auth pagina's
Route::get('/login', fn() => Inertia::render('Auth/Login'))->name('login');
Route::get('/register', fn() => Inertia::render('Auth/Register'))->name('register');

// 🖥️ Snippet frontend views
Route::get('/allsnippets', function () {
    $snippets = CodeSnippet::latest()->get();
    return Inertia::render('AllSnippets', [
        'snippets' => $snippets
    ]);
})->name('snippets.index');
Route::get('/snippets/create', fn() => Inertia::render('CreateSnippet'))->name('snippets.create');

Route::get('/getcode', fn() => Inertia::render('GetCode'))->name('snippets.find');


// Deze route haalt het snippet-object uit de database voor weergave in Show.jsx
Route::get('/snippets/{slug}', function ($slug) {
    $snippet = CodeSnippet::where('slug', $slug)->firstOrFail();
    return Inertia::render('Show', ['snippet' => $snippet]);
})->name('snippets.show');

Route::get('/snippets/{slug}/edit', fn($slug) => Inertia::render('EditSnippet', ['slug' => $slug]))->name('snippets.edit');

// 💾 Snippet backend logica (POST, DELETE)
Route::post('/snippets', [CodeSnippetController::class, 'store'])->name('snippets.store');
Route::patch('/snippets/{slug}', [CodeSnippetController::class, 'update'])->name('snippets.update');
Route::delete('/snippets/{slug}', [CodeSnippetController::class, 'destroy'])->name('snippets.destroy');

// 👤 Profiel bewerken (alleen als je bent ingelogd)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



//edit

Route::get('/snippets/{slug}/edit', function ($slug) {
    $snippet = \App\Models\CodeSnippet::where('slug', $slug)->firstOrFail();
    return Inertia::render('EditSnippet', ['snippet' => $snippet]);
})->name('snippets.edit');

Route::patch('/snippets/{slug}', [\App\Http\Controllers\CodeSnippetController::class, 'update'])->name('snippets.update');