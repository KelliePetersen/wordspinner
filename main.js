const wordLength = document.getElementById("word-length");

function addWordLength() {
  let newOption, newValue; 
  for (let i = 1; i <= 20; i++) {
    newOption = document.createElement("option");
    newOption.text = i;
    wordLength.add(newOption);
  }
}

addWordLength();

function spin(words){
  return words.replace(new RegExp('\\w{'+wordLength.value+',}', 'g'), (w) => w.split('').reverse().join(''));
}