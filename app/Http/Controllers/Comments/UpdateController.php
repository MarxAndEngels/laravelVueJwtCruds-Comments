<?php

namespace App\Http\Controllers\Comments;

use App\Models\Comment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Comments\UpdateRequest;

class UpdateController extends Controller
{
    public function __invoke(UpdateRequest $request,$id)
    { 
        $data = $request->validated();
        if($data['user'] === Auth::user()->id){
            unset($data['user']);
            $findComment = Comment::find($id);
            $findComment->update($data);
            return response()->json(['status'=>'success']);
        }else{
            return 0;
        }
    }
}
