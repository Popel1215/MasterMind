let Number1 = Math.round(Math.random() * 9);
let Number2 = Math.round(Math.random() * 9);
let Number3 = Math.round(Math.random() * 9);
let Number4 = Math.round(Math.random() * 9);
let Versuche = 0;

while (Number1 == Number2 || Number1 == Number3 || Number2 == Number3 || Number1 == Number4 || Number2 == Number4 || Number3 == Number4) {
  Number1 = Math.round(Math.random() * 9);
  Number2 = Math.round(Math.random() * 9);
  Number3 = Math.round(Math.random() * 9);
  Number4 = Math.round(Math.random() * 9);
}

function guess(event) {
  if (event && event.preventDefault) event.preventDefault();

  Versuche++;
  const triesElement = document.getElementById("Tries");
  const first = document.getElementById("first");
  const second = document.getElementById("second");
  const third = document.getElementById("third");
 const fourth = document.getElementById("fourth");
  const New = document.getElementById("New");

  triesElement.innerHTML = 'Versuche: ' + Versuche;

  const v1 = Number(first.value);
  const v2 = Number(second.value);
  const v3 = Number(third.value);
  const v4 = Number(fourth.value);

  // Erste Stelle
  if (v1 === Number1) {
    New.innerHTML += '🟢' + v1 + '  ';
  } else if (v1 === Number2 || v1 === Number3 || v1 === Number4) {
    New.innerHTML += '🟡' + v1 + '  ';
  } else {
    New.innerHTML += '🔴' + v1 + '  ';
  }

  // Zweite Stelle
  if (v2 === Number2) {
    New.innerHTML += '🟢' + v2 + '  ';
  } else if (v2 === Number1 || v2 === Number3 || v2 === Number4) {
    New.innerHTML += '🟡' + v2 + '  ';
  } else {
    New.innerHTML += '🔴' + v2 + '  ';
  }

  // Dritte Stelle
  if (v3 === Number3) {
    New.innerHTML += '🟢' + v3 + '  ';
  } else if (v3 === Number1 || v3 === Number2 || v3 === Number4) {
    New.innerHTML += '🟡' + v3 + '  ';
  } else {
    New.innerHTML += '🔴' + v3 + '  ';
  }
 //Vierte Stelle
  if (v4 === Number4) {
    New.innerHTML += '🟢' + v4 + '<p>';
  } else if (v4 === Number1 || v4 === Number2 || v4 === Number3) {
    New.innerHTML += '🟡' + v4 + '<p>';
  } else {
    New.innerHTML += '🔴' + v4 + '<p>';
  }
  if (v1 === Number1 && v2 === Number2 && v3 === Number3 && v4 === Number4) {
    New.innerHTML = 'Du hast gewonnen! 👍';
  }

  //first.value = "";
  //second.value = "";
  //third.value = "";
  //fourth.value = "";

}
