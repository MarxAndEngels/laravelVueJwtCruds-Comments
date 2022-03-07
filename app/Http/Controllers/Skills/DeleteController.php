<?php

namespace App\Http\Controllers\Skills;

use Carbon\Carbon;
use App\Models\Skill;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\Skills\UpdateRequest;

class DeleteController extends Controller
{
    public function __invoke($id)
    { 
        $skill = Skill::find($id);
        $skillImage = $skill['image'];
        $url= url('/storage');
        $url = $url.'/';
        $url = str_replace( $url , '' , $skillImage);
        Storage::disk('public')->delete($url);
        $skill->delete();
        
        return response()->json(['status'=>'success']);
    }
}
