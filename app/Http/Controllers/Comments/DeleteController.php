<?php

namespace App\Http\Controllers\Comments;

use App\Models\Comment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class DeleteController extends Controller
{
    public function __invoke($id)
    { 
        $comment = Comment::find($id);
        $arr_answers = $comment->commentsAnsw;

        if($comment->user_id === Auth::user()->id){
            $comment->commentsAnsw()->detach(); //удалить связи все
            foreach($arr_answers as $el){
                $el->delete();
            }
            $comment->delete();
           
        }
    }
}
