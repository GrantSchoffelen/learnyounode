var array = process.argv; 


function add(array){
   var sum=0;
    for (var i = 2; i<array.length; i++){
    sum = sum + Number(array[i])}
    return sum; 
    
}

console.log(add(array)); 
