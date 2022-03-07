<?php

namespace App\Http\Controllers\Skills;

use Carbon\Carbon;
use App\Models\Skill;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\Skills\IndexRequest;
use App\Http\Requests\Skills\StoreRequest;

class IndexController extends Controller
{
    public function __invoke(IndexRequest $request)
    {
        $data = $request->validated();
        if($data['count'] > Skill::count()){
            $data['count'] = Skill::count();
        }
        $skills = Skill::paginate($data['count']);
        $categories = Category::paginate($data['count']);
        foreach($skills as $skill){
            $skill->category;
        }
        if($skills->count() >= 1){
            return response()->json(['skills'=>$skills, 'categories'=>$categories]); 
        }else{
            return response()->json(['status'=>'nothing']);
        }

    }
}
