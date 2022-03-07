<?php

namespace App\Http\Controllers\Comments\Answers;

use App\Models\CommAnswer;
use Illuminate\Http\Request;
use App\Models\CommentUserAnswer;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Comments\Answers\UpdateRequest;

class UpdateController extends Controller
{
    public function __invoke(UpdateRequest $request,$id)
    { 
        $data = $request->validated();
        if($data['user'] === Auth::user()->id){
            unset($data['user']);
            $findComment = CommAnswer::find($id);
            $findComment->update($data);
            return response()->json(['status'=>'success']);
        }else{
            return 0;
        }
    }
}
