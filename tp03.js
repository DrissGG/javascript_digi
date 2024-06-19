let var1 = 1

for(let i =1; i<=10; i++){
    console.log(var1+i)    
}

let v2 = 20
let sum = 0
for(let i=1; i<=v2; i++){
    sum+=i
}
console.log("somme = "+sum)

let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4]

console.log("Éléments du tableau :");
for(let i =0; i<=array.length;i++){
    console.log(array[i])
}


console.log("Éléments du tableau dans l'ordre inverse :");
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}


let arrayCopy = array.slice();
console.log("Copie du tableau array :", arrayCopy);




let max = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}

console.log("Le plus grand élément du tableau est : " + max);


let array2 = [6, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4, 6];


let firstLast6 = array2.length > 0 && (array2[0] === 6 || array2[array2.length - 1] === 6);

console.log(firstLast6); 

