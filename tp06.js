let societe = {
    "nom": "Mex",
    "siege social ":"Googleplex, Mountain View, California, United States",
    "fondateurs": [
        {"nom":"Larry Page", "date de naissance": "26/03/1973", "lieu de naissance": "East Lansing, Michigan"},
        {"nom":"Sergey Brin", "date de naissance": "21/08/1973", "lieu de naissance": "à Moscou, Union Soviétique"}
    ],
    "chiffre d'affaires en M de $":
        { "2008": 16.49,
        "2012": 37.97,
        "2016": 89.46,
        "2018": 136.2}
    
}

console.log("Fondateur de la societe : ");
societe.fondateurs.forEach(f =>{
    console.log(`${f.nom}, né le ${f["date de naissance"]}, à ${f["lieu de naissance"]}`);
})

console.log("\nChiffres d'affaires de la société (en milliards de $) :");
for (let annee in societe["chiffre d'affaires en M de $"]) {
    console.log(`${annee} : ${societe["chiffre d'affaires en M de $"][annee]}`);
}
