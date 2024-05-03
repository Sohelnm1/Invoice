<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\TestController;

Route::get('/', function () {
    return Inertia::render('Home'); // This will get component Test.jsx from the resources/js/Pages/Test.jsx
});

// Route::get('test', 'TestController@index' );
Route::get('test', [TestController::class , 'index'] );

// Route::get('option1', "TestController@optionindex");

Route::get('option1', [TestController::class , 'optionindex'] );

