<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        $user = auth()->user();
        $locations = DB::table('locaties')->get();
        return Inertia::render('dashboard', [
            'role' => $user->role,
            'locations' => $locations
        ]);
    })->name('dashboard');
});

Route::get('/overview/{city?}', function ($city = null) {
    return Inertia::render('overview', ['city' => $city]);
})->where('city', '.*')->name('overview');




require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
