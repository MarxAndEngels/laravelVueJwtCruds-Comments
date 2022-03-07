<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'api','prefix' => 'auth'], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

    Route::group(['middleware'=>'jwt.auth'], function () {
        Route::group(['namespace'=>'Fruits','prefix'=>'fruits', 'middleware'=>'admin' ], function(){
            Route::get('/','IndexController');
        });
        
        Route::group(['namespace'=>'Categories','prefix'=>'categories'], function(){
            Route::get('/','IndexController');
        });

        Route::group(['namespace'=>'Skills','prefix'=>'skills'], function(){
            Route::post('/index','IndexController');
            Route::post('/','StoreController');
            Route::get('/{id}','ShowController');
            Route::patch('/{id}','UpdateController');
            Route::delete('/{id}','DeleteController');
        });


        Route::group(['namespace'=>'Response','prefix'=>'response'], function(){
            Route::post('/','StoreController');
        });

        //комментарии
        Route::group(['namespace'=>'Comments','prefix'=>'comments'], function(){
            Route::get('/{param}','IndexController');
            Route::post('/','StoreController');
            Route::patch('/{id}','UpdateController');
            Route::delete('/{id}','DeleteController');

            Route::group(['namespace'=>'Answers','prefix'=>'answers'], function(){
            Route::post('/','StoreController');
            Route::patch('/{id}','UpdateController');
            Route::delete('/{id}','DeleteController');
             });
        });
      //комментарии

    });
});

Route::group(['namespace'=>'Skills','prefix'=>'main/skills'], function(){
    Route::post('/index','IndexController');
});


Route::group(['namespace'=>'User','prefix'=>'user'], function(){
    Route::post('/','StoreController');
});

