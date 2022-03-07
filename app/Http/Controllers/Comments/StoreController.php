<?php

namespace App\Http\Controllers\Comments;

use App\Models\Comment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Comments\StoreRequest;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    { 
        $data = $request->validated();
        $data['user_id'] = Auth::user()->id;
        Comment::create($data);
        return response()->json(['status'=>'success']);
    }
}
