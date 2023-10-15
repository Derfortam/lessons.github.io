
// document.addEventListener('DOMContentLoaded', function() {
//     var button_1 = document.querySelector('.but_1');
//     var circle_1 = document.querySelector('.circle_1');
//     var circle_2 = document.querySelector('.circle_2');
//     var circle_3 = document.querySelector('.circle_3');
//     var circle_4 = document.querySelector('.circle_4');

//     button_1.addEventListener('mouseover', function() {
//       circle_1.style.backgroundColor = 'red';
//     });
//     button_1.addEventListener('mouseover', function() {
//         circle_2.style.backgroundColor = 'yellowgreen';
//       });
//       button_1.addEventListener('mouseover', function() {
//         circle_3.style.backgroundColor = 'red';
//       });
//       button_1.addEventListener('mouseover', function() {
//         circle_4.style.backgroundColor = 'yellowgreen';
//       });

//     button_1.addEventListener('mouseout', function() {
//       circle_1.style.backgroundColor = 'yellow';
//     });
//     button_1.addEventListener('mouseout', function() {
//         circle_2.style.backgroundColor = 'yellow';
//       });
//     button_1.addEventListener('mouseout', function() {
//         circle_3.style.backgroundColor = 'yellow';
//     });
//     button_1.addEventListener('mouseout', function() {
//         circle_4.style.backgroundColor = 'yellow';
//       });
//   });



//   document.addEventListener('DOMContentLoaded', function() {
//     var button = document.querySelector('.but_1');
//     var circle = document.querySelector('.circle_1');
//     var valueElement = document.getElementById('value');
//     var value = parseInt(valueElement.textContent);

//     button.addEventListener('click', function() {
//       value -= 10;
//       valueElement.textContent = value;

//       if (value < 0 || value > 100) {
//         circle.classList.add('red');
//         setTimeout(function() {
//           circle.classList.remove('red');
//         }, 1000);
//       }
//     });
//   });

console.log("vfeb");

var mass = [
  { src: "../img/vizir.jpg", text: "Hello, text 1" },
  { src: "../img/vizir.jpg", text: "Hello, text 2" },
  { src: "../img/vizir.jpg", text: "Hello, text 3" },
  { src: "../img/vizir.jpg", text: "Hello, text 4" },
  { src: "../img/vizir.jpg", text: "Hello, text 5" },
  { src: "../img/vizir.jpg", text: "Hello, text 6" },

  { src: "../img/bibli.jpg", text: "Hello, everyone 2" },
  { src: "../img/sadivn.jpg", text: "Hello, everyone 3" },
  { src: "../img/imag.jpg", text: "Hello, everyone 4" },
  { src: "../img/bibli.jpg", text: "Hello, everyone 5" },
  { src: "../img/sadivn.jpg", text: "Hello, everyone 6" },
  { src: "../img/imag.jpg", text: "Hello, everyone 7" }
];

var imgElement = document.getElementById("img");
var textElement = document.getElementById("text");

var narod = document.getElementById("narod");
var money = document.getElementById("money");

var button_1 = document.querySelector('.but_1');
var button_2 = document.querySelector('.but_2');

// button_1.addEventListener('click', function () {
//   // Генеруємо випадковий індекс від 0 до довжини масиву - 1
//   var randomIndex = Math.floor(Math.random() * mass.length);

//   // Встановлюємо вміст елементів на основі випадкового індексу
//   imgElement.src = mass[randomIndex].src;
//   textElement.innerHTML = mass[randomIndex].text;
// });



var currentIndex = 0;
// button_1.addEventListener('click', function () {
//   if (currentIndex >= mass.length) {
//     alert("Масив закінчився");
//   } else {
//     imgElement.src = mass[currentIndex].src;
//     textElement.innerHTML = mass[currentIndex].text;
//     currentIndex++;

//     // Якщо ми досягли 6-го елемента, видаляємо перші 5
//     if (currentIndex >= 6) {
//       mass.splice(0, 5);
//       currentIndex -= 5;
//       var randomIndex = Math.floor(Math.random() * mass.length);

//       //   // Встановлюємо вміст елементів на основі випадкового індексу
//       imgElement.src = mass[randomIndex].src;
//       textElement.innerHTML = mass[randomIndex].text;
//     }
//   }
// });
button_1.addEventListener('click', function () {

  imgElement.src = mass[currentIndex].src;
  textElement.innerHTML = mass[currentIndex].text;
  currentIndex++;

  // Якщо ми досягли 6-го елемента, видаляємо перші 5
  if (currentIndex >= 6) {
    mass.splice(0, 5);
    currentIndex -= 5;
    var randomIndex = Math.floor(Math.random() * mass.length);

    imgElement.src = mass[randomIndex].src;
    textElement.innerHTML = mass[randomIndex].text;
  }
});
button_2.addEventListener('click', function () {

  imgElement.src = mass[currentIndex].src;
  textElement.innerHTML = mass[currentIndex].text;
  currentIndex++;

  // Якщо ми досягли 6-го елемента, видаляємо перші 5
  if (currentIndex >= 6) {
    mass.splice(0, 5);
    currentIndex -= 5;
    var randomIndex = Math.floor(Math.random() * mass.length);

    imgElement.src = mass[randomIndex].src;
    textElement.innerHTML = mass[randomIndex].text;
    // if (isActive === true) {
    //   narod.innerHTML = 60;
    //   money.innerHTML = 40;
    // }
  }
});


// { src: "../img/bibli.jpg", text: "Hello, everyone 2", a = true,  b = falce}
// if(a == true){circle+=10} else if(b == false){circle-=10}