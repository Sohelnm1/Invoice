<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;


class TestController extends Controller
{
    //
    public function index(){
       return Inertia::render('Testtest');
    }

        public function optionindex(){
       return Inertia::render('Option1');
    }
}
