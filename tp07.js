function plusGrandeDate(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);

    if (d1 > d2) {
        console.log("La date la plus récente est : " + d1.toLocaleDateString());
    } else if (d2 > d1) {
        console.log("La date la plus récente est : " + d2.toLocaleDateString());
    } else {
        console.log("Les deux dates sont identiques : " + d1.toLocaleDateString());
    }
}

plusGrandeDate("2022-03-15", "2023-06-19");


function calculerAge(dateNaissance) {
    let naissance = new Date(dateNaissance);
    let today = new Date();

    let ageAnnees = today.getFullYear() - naissance.getFullYear();
    let ageMois = today.getMonth() - naissance.getMonth();

   
    if (ageMois < 0) {
        ageAnnees--;
        ageMois += 12;
    }

    console.log(`Vous avez ${ageAnnees} ans et ${ageMois} mois.`);
}


calculerAge("2000-01-01");
