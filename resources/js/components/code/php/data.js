let dataCode = [
    {
        'id': 1,
         'question': `Подсчитать количество цифр в массиве`,
         'answer':`
    function countNumbers($arr)
    {
      $result;
      foreach($arr as $el){
        if(isset($result[$el])){
            $result[$el]++;
        }else{
            $result[$el] = 1;
        }
    }
    return $result;
    }
    countNumbers([1,3,5,4,4,5,4,5]);`
     },
    {
        'id': 1,
         'question': `Найти все простые числа`,
         'answer':`
         function divisors($integer) {
            if($integer > 1){
            $arr = [];
            for($i=2; $i<$integer; $i++){
              if($integer % $i == 0){
              array_push($arr , $i);
            }
              }
             }
            return $arr;
          }`
     },
 {
    'id': 2,
     'question': `Найти лишнее число. Например из массива [1, 1, 2] должно вернуться только 2`,
     'answer':`
     function stray($arr)
     {
      $newarr;
      foreach($arr as $el){
          if(isset($newarr[$el])){
              $newarr[$el]++;
          }else{
               $newarr[$el]=1;
          }
      }
      foreach($newarr as $key=>$el){
         if($el > 1){
             unset($newarr[$key]);
         }
      }
        foreach($newarr as $key=>$el){
          return([$key]);
       }
     }
     stray([1,1,2]);`
 },
 {
    'id': 3,
     'question': `Поменять отрицательное число на положительное`,
     'answer':
     `function invert( $arr)
     {
       for($i=0; $i< count($arr); $i++){
           if($arr[$i] < 0){
                $arr[$i] = (int) str_replace('-' ,'',$arr[$i]);
           }else{
               $arr[$i] = -$arr[$i];
           }
       }
       var_dump($arr);
     }
     stray([-12,22,12]);`
 },
 {
    'id': 3,
     'question': `Проверить на изограмму - на слово в котором нет повторяющихся букв`,
     'answer':
     `function isIsogram($string) {
        $arr =[];
        $text = strtolower($string);
        $text = str_split($text,1);
        
        foreach($text as $el){
          if(isset($arr[$el])){
            $arr[$el]++;
          }else{
            $arr[$el] = 1;
          }
        }
        
        foreach($arr as $key=>$el){
          if($el > 1){
            return false;
          }
        }
        return true;
      }`
 },
 {
    'id': 5,
     'question': `Задача на повторение строки`,
     'answer':
     `function strRepeat($str)
     {
         $str = str_split($str);
         $newstr = '';
         for($i=0;$i<count($str); $i++){
             $newstr.= str_repeat($str[$i],$i+1).'-';
         }
         return $newstr;
     
     }
     strRepeat('eqwsadasdwqd');`
 },
 {
    'id':6,
    'question': `Передается массив, нужно взять самые максимальные элементы массива в количестве передаваемого $size. И перемножить эти элементы`,
    'answer':`    
    function maxProduct($arr,$size)
    {
        $result=0;
        rsort($arr);
        
        $result = array_splice($arr,0,$size);
        $answer=1;
        foreach($result as $el){
            $answer*=$el;
        }
        echo $answer;
    
    }
    maxProduct([1,3,5,4],3);`
},
 {
    'id':631,
    'question': `Найти факториал числа`,
    'answer':`    
    function factorial(int $n): int {
        if($n === 0 || $n === 1){
          return 1;
        }
        return $n * factorial($n-1);
      }`
},
 {
    'id':3631,
    'question': `Удалить повторяющиеся элементы из массива`,
    'answer':`    
    let arr = ['kate','Kate','Alex','Adsd',12,32,12];
    let newarr =arr.map(el=>{
        if(typeof el == 'string'){
            return el.toLowerCase();
        }
        else{
              return el;
        }
    })
        newarr= newarr.filter((el,index)=>{
        return index === newarr.indexOf(el);
        //возвращаем элементы где индекс === первому найденому элементу в массива
         })
         console.log(newarr);`
},
 {
    'id': 7,
    'question': `Нахождение простого числа. Число называется простым, если оно больше 1 и если оно делится только само на себя и на 1. Например, число 5 - простое. А число 6 - не является простым, т.к. у него есть еще делители 2 и 3.`,
    'answer':`    
    function isPrime(num){
        for(let i=2; i<num; i++){
          if(num % i == 0){
              return false
          }
          return true;
        }
       }
       console.log(isPrime(12));
       console.log(isPrime(11));`
},
 {
    'id': 8,
    'question': `Рекурсивное нахождения факториала`,
    'answer':`    
    function factorial(num){
        if(num == 0 || num == 1){ //при 0 и 1 факториал = 1
            return 1;
        }
        return num * factorial(num-1)
     }
     console.log(factorial(5));`
},
 {
    'id': 9,
    'question': `Дан неупорядоченный список цифр от 0 до 9. Составить из этих цифр наибольшее число. Например из 32992435 получится 99543322`,
    'answer':`    
    function findMax(num){
        let newarr = num.split('');
        newarr.sort((a,b)=>{return b-a});
        let result = newarr.join('');
        console.log(result);
    }
    findMax('32992435');`
},
 {
    'id': 923,
    'question': `Необходимо написать функцию, которая принимает на вход два массива с числами. На выходе мы должны вернуть новый массив, который будет в себе содержать только те элементы, которые встречались в обоих массивах, без повторяющихся элементов `,
    'answer':`    
    function findUnique(arr1,arr2){
        let newarr =[];
        for(let el of arr1){
            if(arr2.includes(el)){
                if(!newarr.includes(el)){
                       newarr.push(el);
                }
            }
        }
        console.log(newarr);
    }
    findUnique([132,32,43,1234,32],[132,32,43132,231,1]);`
},
 {
    'id': 92233,
    'question': `Совпадение элементов с неограниченным количеством массивов`,
    'answer':`    
    function getInt(...arrs){
        let result = [];
        arrel= arrs.shift();  //вырезали 1-ый массив [1, 2, 3]
        for( let el of arrel){
            if( InArray(el, arrs )){
                result.push(el);
            }
        }
        return result;
     }
     function InArray(el , arrs){
         for(let arr of arrs){
            if( inIndex(el, arr )){
                return false;
            }
         }
         return true;
     }
     function inIndex( el, arr){
         return arr.indexOf(el) == -1;
     }
     
     let result = getInt([1, 2, 3], [2, 3, 4], [4, 3, 2]);
     console.log(result); // выведет [2, 3]
     `
},
 
];
export default dataCode;