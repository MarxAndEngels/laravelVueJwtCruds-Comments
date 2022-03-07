<?php

namespace App\Http\Controllers\Skills;

use Carbon\Carbon;
use App\Models\Skill;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\Skills\StoreRequest;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    { 
        $data = $request->validated();
        $image = $data['image'];
        $name = md5(Carbon::now().'_'.$image->getClientOriginalName()).'.'.$image->getClientOriginalExtension();
        $filePath = Storage::disk('public')->putFileAs('/images',$image, $name); //куда , файл, имя - вернет путь файла
        $data['image'] = url("/storage".'/'.$filePath);
        Skill::create($data);
        return response()->json(['status'=>'success']);
    }
}
