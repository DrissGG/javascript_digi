function fetchData() {
    const req = new XMLHttpRequest()
    req.open('GET', 'https://restcountries.com/v2/all')

    req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status === 200) {
            let countries = JSON.parse(req.responseText)
            displayData(countries)
        }
    }
    req.send();
}

function displayData(countries) {
    const container = document.getElementById('data-container');
    let htmlContent = '';
    // ajout capital et region inclue dans le commit précèdent
    countries.forEach(country => {
        htmlContent += `<div class="country">
            <img src="${country.flags.svg}" alt="Drapeau de ${country.name}">
            <p><strong>Nom:</strong> ${country.name}</p>
            <p><strong>Capitale:</strong> ${country.capital}</p>
            <p><strong>Région:</strong> ${country.region}</p>

            <p><strong>Drapeau:</strong> <img src="${country.flags.png}" alt="Drapeau de ${country.name}" width="32"></p>
            <hr>
        </div>`;
    });

    container.innerHTML = htmlContent

}