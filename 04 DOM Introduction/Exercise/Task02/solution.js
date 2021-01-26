function solve() {
  const input = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;


  let inputArr = input.split(' ');


  var resultArr = [];

  var outputArr = [];
  for (var i = 0; i < inputArr.length; i++) {
    resultArr.push(inputArr[i].toLowerCase());
  }


  if(convention == 'Camel Case') {
    for (let i = 0; i < resultArr.length; i++) {
      if(i == 0) {
        outputArr.push(resultArr[i]);
        continue;
      }

      resultArr[i] = resultArr[i].charAt(0).toUpperCase() + resultArr[i].slice(1);

      outputArr.push(resultArr[i]);
      
    }
  } else if(convention == 'Pascal Case') {
    for (let i = 0; i < resultArr.length; i++) {
      resultArr[i] = resultArr[i].charAt(0).toUpperCase() + resultArr[i].slice(1);
      outputArr.push(resultArr[i]);

      
    }
  } else {
    outputArr.push('Error!');
  }

  

  document.getElementById('result').textContent = outputArr.join('');
}

