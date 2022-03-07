<?php

namespace App\Http\Controllers\Comments;

use App\Models\Comment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class IndexController extends Controller
{
    public function __invoke($param)
    { 
        $comments= Comment::latest()->paginate($param);
        foreach($comments as $comment){
            $comment->user;
            if($comment->user->id == Auth::user()->id){
                $comment->user->status = 1;
            }
            $answers = $comment->commentsAnsw;
            foreach($answers as $answer){
                $answer->user;
                if($answer->user->id == Auth::user()->id){
                    $answer->user->status = 1;
                }
            }
        }
        return $comments;
    }
}
