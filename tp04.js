
function bonjour(name) {
    console.log("Bonjour " + name);
}


bonjour("Marcel"); 

function calcul(a,b)
{return a*b+a+b}

console.log(calcul(3,8))

let resultatChaine = calcul("2", "3");
console.log("result = "+resultatChaine); 


function controleTableau(array) {
    return array.every(element => typeof element === 'number');
}


let test1 = controleTableau([1, 2, 3, 4, 5]);
console.log(test1); 


let test2 = controleTableau([1, 2, "3", 4, 5]);
console.log(test2); 


let test3 = controleTableau([]);
console.log(test3); 
