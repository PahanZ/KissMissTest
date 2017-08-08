
let start = 1; 
let result = []; 
while(start<=100) { 
result.push(start++) 
}; 

let misskiss =() => { 
for (var i = 0; i < result.length; i++) { 
if (result[i] % 5==0 && result[i] % 3==0) { 
result[i]='misskiss'; 
} 
} 
console.log (result); 
}; 
setTimeout(misskiss, 50); 

let miss = () => { 
for (let i = 0; i < result.length; i++) { 
if (result[i] % 3 == 0) { 
result[i]='miss'; 
} 
} 
console.log(result); 
}; 
setTimeout(miss, 50); 


let kiss =() => { 
for (let i = 0; i < result.length; i++) { 
if (result[i] % 5 == 0) { 
result[i]='kiss'; 
} 
} 
console.log(result); 
}; 
setTimeout(kiss, 50); 


//-----------------second option------------------// 

// let start = 1; 
// let result = []; 
// while(start<=100) { 
// result.push(start++) 
// }; 


// let x = () => { 
// result.forEach(function(element, index, result){ 
// if (result[index] % 5 ==0 && result[index] % 3 ==0) { 
// result[index] ='kissmiss'; 
// } 
// }) 
// console.log(result) 
// }; 
// setTimeout(x, 50); 


// let y = () => { 
// result.forEach(function(element, index, result){ 
// if (result[index] % 3 == 0) { 
// result[index] ='miss'; 
// } 
// }) 
// console.log(result) 
// }; 
// setTimeout(y, 50); 

// let z = () => { 
// result.forEach(function(element, index, result){ 
// if (result[index] % 5 == 0) { 
// result[index] ='kiss'; 
// } 
// }) 
// console.log(result) 
// }; 
// setTimeout(z, 50); 


//-----------------third option(without deelay)------------------// 

// let start = 1; 
// let result = []; 
// while(start<=100) { 
// result.push(start++) 
// }; 


// let n = () => { 
// result.map(function(e){ 
// if(e % 3 == 0 && e % 5 == 0){ 
// e='misskiss'; 
// } else if (e % 3 == 0){ 
// e='miss'; 
// } else if(e % 5 == 0) { 
// e='kiss'; 
// } 
// console.log(e) 
// })}; 
// setTimeout(n, 50); 
