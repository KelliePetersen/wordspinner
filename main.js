window.onload = function() {

  const wordLength = document.getElementById("word-length");
  const userInput = document.getElementById("input");
  const result = document.getElementById("result");
  const submit = document.getElementById("submit");  
  
  submit.addEventListener("click", output);
  addWordLength();

  function addWordLength() {
    let newOption, newValue;
    for (let i = 1; i <= 20; i++) {
      newOption = document.createElement("option");
      newOption.text = i;
      wordLength.add(newOption);
    }
  }

  function spin(words) {
    return words.replace(new RegExp('\\w{' + wordLength.value + ',}', 'g'), (w) => w.split('').reverse().join(''));
  }

  function output() {
    result.value = spin(userInput.value);
  }

};