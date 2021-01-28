
function addItem() {
    const textElement = document.getElementById('newItemText');
    const valueElement = document.getElementById('newItemValue');
    const option = document.createElement('option');
    option.value = valueElement.value;
    option.textContent = textElement.value;
    textElement.value = '';
    valueElement.value = '';
    document.getElementById('menu').appendChild(option);
}