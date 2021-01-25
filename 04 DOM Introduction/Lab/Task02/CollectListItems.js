function extractText() {
   var liElements = document.getElementsByTagName('li');

   for (let el of liElements) {
       document.getElementById('result').value += el.textContent + '\n';
   }
}