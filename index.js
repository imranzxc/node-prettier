document.addEventListener("DOMContentLoaded", () => {
  const words = ["баклажан", "собака", "убийца", "гамадрил"];
  const ranWorddddd = words[Math.floor(Math.random() * words.length)];
  const answerArr = [];
  for (let i = 0; i < ranWorddddd.length; i++) {
    answerArr.push("_");
  }

  let hhhhhh = ranWorddddd.length;

  while (hhhhhh > 0) {
    alert(answerArr.join(" "));
    let guess = prompt("Угадайте букву");
    if (guess === null) break;
    else if (guess.length !== 1) alert("Введите только одну букву");
    else {
      for (let i = 0; i < ranWorddddd.length; i++) {
        if (ranWorddddd[i] === guess) {
          answerArr[i] = guess;
          hhhhhh--;
        }
      }
    }
  }

  alert(answerArr.join(" "));
  alert("Отлично, было загадано слово " + ranWorddddd);
});
