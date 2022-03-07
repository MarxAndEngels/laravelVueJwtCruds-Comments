<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $guarded = false;

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function commentsAnsw(){
        return $this->belongsToMany(CommAnswer::class, 'comment_user_answers', 'comment_id', 'answer_id');
    }
}
