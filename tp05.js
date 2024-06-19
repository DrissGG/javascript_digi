
function calcul(a, b) {
    if (a === undefined || b === undefined) {
        throw new Error("Les deux paramètres sont requis");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Les paramètres doivent être des nombres");
    }
    return a * b + a + b;
}


try {
    console.log(calcul(2, 3)); 
    console.log(calcul(2)); 
} catch (error) {
    console.error(error.message);
}

try {
    console.log(calcul("2", "3")); 
} catch (error) {
    console.error(error.message);
}

try {
    console.log(calcul(2, "3")); 
} catch (error) {
    console.error(error.message);
}
