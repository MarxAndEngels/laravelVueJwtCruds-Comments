let dataCode = [
    {
        'id': 1,
         'question': `Сортировка пузырьком`,
         'answer':
         `function bubbleSort(arr) {
            for(let i=0;i<arr.length; i++){
                for(let j=0;j<arr.length;j++){
                    if(arr[j+1]<arr[j]){
                        let temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                    }
                }
            }
            return arr;
             }
             console.log(bubbleSort([12,32,44,123,453,5,23,43,32,2]));`
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
    'id': 3,
     'question': `Сортировка элементов, не изменяя исходный массив`,
     'answer':`
     let arr = ['6653','32','121','45545'];
     let newArr = JSON.parse(JSON.stringify(arr)); //чтобы не изменять массив исходный
     newArr= newArr.sort((a,b)=>{return a-b});
     console.log(arr);
     console.log(newArr);`
 },
 {
    'id':631,
    'question': `Необходимо написать функцию, которая принимает в качестве аргумента строку и возвращает индекс первого уникального символа. Если мы не найдем ни одного уникального символа, то функция должна вернуть -1`,
    'answer':`    
    function uniqueSimbol(str){
        let arr = str.split('');
        let obj ={};
        for(let el of arr){
           if(!obj[el]){
               obj[el] = 1
           }else{
               obj[el]++
           }
        }
        let count=0;
        for(let el in obj){
          if(obj[el] == 1){
              console.log(el);
            return el;
          }
        }
        return -1;
    }
    uniqueSimbol('eeqweqwjk');`
},

 {
    'id': 4,
     'question': `Алгоритм анаграммы. Анаграмма — это перестановка букв слова, посредством которой из одного слова составляется другое.`,
     'answer':
     `     function anagram(param1,param2){
        let text1 = param1.replace(/[^а-яёa-z]/g, '');  //убираем все кроме этих букв
        let text2 = param2.replace(/[^а-яёa-z]/g, ''); //убираем все кроме этих букв
        text1 = text1.toLowerCase().split('').sort(sortText).join('');
        text2 = text2.toLowerCase().split('').sort(sortText).join('');
        if(text1 === text2){
            return true;
        }
        return false;
    }
    function sortText(a,b){
      let el1= a.toLowerCase();
      let el2 = b.toLowerCase();
      if(el1>el2){
          return 1;
      }
      if(el1<el2){
          return -1;
      }
      return 0;
    }
    console.log(anagram('qwersa','resawq1'));`
 },
 {
    'id': 2,
     'question': `Бинарный поиск`,
     'answer':`
     function BinarySearch(arr,el){
        let left = -1;
        let right = arr.length;
        while(right-left>1){ //если 1 элемент значит прекращаем цикл
         let mid = Math.floor((left+right)/2); //середина
         if(arr[mid] === el){
             return el;
         }
         if(arr[mid] > el){
            right = mid
         }else{
             left = mid
         }
        }
        return false;
     }
     console.log(BinarySearch([1,2,3,4,5,6,7,8,9], 5));`
 },
 {
    'id':5,
    'question': `Задача на нахождение максимального счастливого числа. Дан массив чисел, нужно найти максимальное число из списка, которое равно его количеству в списке. Например дан список 32312344. Здесь число 3 встречается 3 раза и знаение его равно 3. И это самое максимальное число. Ответ должен быть 3`,
    'answer':`    
      let num = '66666611323344445557799911';
      function findLucky(num){
      let text = String(num);
      let arr = text.split('');
      let res = {};
      for(let el of arr){
         if(res[el]){
             res[el]++;
         }else{
             res[el]=1;
         }
      }
      
      let luckyNum =0;
      for(let el in res){
        if(res[el] == el){
             luckyNum= Math.max(luckyNum,el);
        }
      }
      console.log(luckyNum);
    }
    findLucky(num);`
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