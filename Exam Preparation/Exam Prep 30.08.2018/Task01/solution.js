function addDestination() {
    let inputDataElements = Array.from(document.querySelectorAll('#input input'));
    let [city, country] = inputDataElements;
 
    let seasonSelectElement = document.querySelector('#seasons');
    let tbodyDestinationList = document.querySelector('#destinationsList');
    let summaryBoxInputElements = Array.from(document.querySelectorAll('#summaryBox input'));
 
    if (!city.value || !country.value) {
        return;
    } else {
        createElement();
    }
 
    function createElement() {
        let trElement = document.createElement('tr');
        trElement.innerHTML = `<td>${city.value}, ${country.value}</td><td>${seasonSelectElement.value[0].toLocaleUpperCase() + seasonSelectElement.value.substring(1)}</td>`;
        tbodyDestinationList.appendChild(trElement);
 
        summaryBoxChanged();
 
        [city.value, country.value] = ['', ''];
    }
 
    function summaryBoxChanged() {
        summaryBoxInputElements.forEach(el => {
            if (el.id === seasonSelectElement.value) {
                el.value = Number(el.value) + 1;
            }
        });
    }
}