<?php

namespace App\Http\Controllers\Fruits;

use App\Models\Fruit;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
// use App\Http\Resources\Fruits\FruitsResource;

class IndexController extends Controller
{
    public function __invoke()
    { 
        return 1;
        // $fruits = Fruit::all();
        // // $fruits = FruitsResource::collection($fruits);
        // return $fruits;
    }
}
