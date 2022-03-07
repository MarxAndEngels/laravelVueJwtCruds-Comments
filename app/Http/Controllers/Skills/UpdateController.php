<?php

namespace App\Http\Controllers\Skills;

use Carbon\Carbon;
use App\Models\Skill;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\Skills\UpdateRequest;

class UpdateController extends Controller
{
    public function __invoke(UpdateRequest $request,$id)
    { 
        $skill = Skill::find($id);
        $data = $request->validated();
        $image = $data['image'];
        if($data['image'] != 'undefined'){
            $name = md5(Carbon::now().'_'.$image->getClientOriginalName()).'.'.$image->getClientOriginalExtension();
        $filePath = Storage::disk('public')->putFileAs('/images',$image, $name); //куда , файл, имя - вернет путь файла
        $skill->update([
            'name'=>$data['name'],
            'image'=>url("/storage".'/'.$filePath),
            'hidden_content'=>$data['hidden_content'],
            'category_id'=>$data['category_id']
        ]);
        $url= url('/storage');
        $url = $url.'/';
        $url = str_replace( $url , '' , $data['old_image']);
        Storage::disk('public')->delete($url);
        }
        else{
            $skill->update([
            'name'=>$data['name'],
            'hidden_content'=>$data['hidden_content'],
            'category_id'=>$data['category_id']
        ]);
        return response()->json(['status'=>'success']);
        }
        return response()->json(['status'=>'success']);
    }
}
