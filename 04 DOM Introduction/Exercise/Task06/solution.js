function solve() {
  let inputText = document.getElementById('input').value;
  let sentenceList = Array.from(inputText.split(". ").filter(e => e));
  let trial = []
  while(sentenceList.length>=3) {
    if (sentenceList[0]=="") {
      break;
    }
      trial = sentenceList.splice(0,3)
      let paragraph = document.createElement("P")
      paragraph.innerHTML = trial.join(".") + '.'
       document.getElementById('output').appendChild(paragraph) 
    }
    if (sentenceList.length < 3 && sentenceList[0]!="") {
      let paragraph = document.createElement("P")
      paragraph.innerHTML = sentenceList.join(".")
       document.getElementById('output').appendChild(paragraph) 
    }
  }