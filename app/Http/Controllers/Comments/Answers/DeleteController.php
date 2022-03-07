<?php

namespace App\Http\Controllers\Comments\Answers;

use App\Models\CommAnswer;
use Illuminate\Http\Request;
use App\Models\CommentUserAnswer;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Comments\Answers\DeleteRequest;

class DeleteController extends Controller
{
    public function __invoke($id)
    { 
        $answer = CommAnswer::find($id);
        if($answer->user_id == Auth::user()->id){
            $comment_answer = CommentUserAnswer::where('answer_id',$answer->id);
            $comment_answer->delete();
            $answer->delete();
        }else{
            return 0;
        }
    }
}
