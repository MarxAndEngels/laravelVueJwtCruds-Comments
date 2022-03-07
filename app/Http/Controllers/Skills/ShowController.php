<?php

namespace App\Http\Controllers\Skills;

use App\Models\Skill;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ShowController extends Controller
{
    public function __invoke($id)
    { 
        $skill = Skill::find($id);
        $skill->category;
        return $skill;
    }
}
