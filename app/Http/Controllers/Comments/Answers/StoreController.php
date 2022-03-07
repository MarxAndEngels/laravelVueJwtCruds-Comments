<?php

namespace App\Http\Controllers\Comments\Answers;

use App\Models\Comment;
use App\Models\CommAnswer;
use Illuminate\Http\Request;
use App\Models\CommentUserAnswer;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Comments\Answers\StoreRequest;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    { 
        $data = $request->validated();
        $answer = CommAnswer::create([
            'user_id'=>Auth::user()->id,
            'content'=>$data['content'],
        ]);
        $commentMain = Comment::find($data['comment_id']);
        $commentMain->commentsAnsw()->attach($answer->id);
        // CommentUserAnswer::create([
        //      'comment_id'=>$data['comment_id'],
        //      'answer_id'=>$answer->id,
        // ]);


        return response()->json(['status'=>'success']);
    }
}
