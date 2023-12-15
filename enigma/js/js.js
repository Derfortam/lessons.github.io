const enc = document.querySelector('.page__encrypt-display');
enc.addEventListener('click', function () {
    document.documentElement.classList.toggle('encrypt-open');
});

const dec = document.querySelector('.page__decrypt-display');
dec.addEventListener('click', function () {
    document.documentElement.classList.toggle('decrypt-open');
});



// const icon = document.querySelector('.menu__burger');
// icon.addEventListener('click', function () {
//     document.documentElement.classList.toggle('menu-open');
// });

// const filter = document.querySelector('.filter__main-name');
// filter.addEventListener('click', function () {
//     document.documentElement.classList.toggle('filter-open');
// });
const numberInput = document.getElementById('rotor1');
const wheel1 = document.getElementById('wheel1');
const clickSound = document.getElementById('clickSound');

numberInput.addEventListener('input', () => {
    const value = numberInput.value;
    const degrees = 360 - ((value - 1) * (360 / 26)); // обчислюємо градуси для обертання в іншу сторону
    wheel1.style.transform = `rotate(${degrees}deg)`; // повертаємо колесо

    // Відтворення звуку щокання
    clickSound.currentTime = 0; // Скидання часу аудіофайлу до початку
    clickSound.play(); // Відтворення звуку
});



const numberInput2 = document.getElementById('rotor2');
const wheel2 = document.getElementById('wheel2');
const clickSound2 = document.getElementById('clickSound2');

numberInput2.addEventListener('input', () => {
    const value = numberInput2.value;
    const degrees = 360 - ((value - 1) * (360 / 26)); // обчислюємо градуси для обертання в іншу сторону
    wheel2.style.transform = `rotate(${degrees}deg)`; // повертаємо колесо

    // Відтворення звуку щокання
    clickSound2.currentTime = 0; // Скидання часу аудіофайлу до початку
    clickSound2.play(); // Відтворення звуку
});



function getEncrypt(event) {
    event.preventDefault();
    //wheel
    // Отримання вхідних даних
    let input = document.getElementById('messageToEncrypt').value;
    let rotorPosition = parseInt(document.getElementById('rotor1').value);
    let rotorPosition2 = parseInt(document.getElementById('rotor2').value);

    // Визначення роторів
    let r1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let r2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    // Обертання роторів
    r1 = rotateRotor(r1, rotorPosition);
    r2 = rotateRotor(r2, rotorPosition2);

    const mappings = {};
    const mappingValues = [13, 25, 7, 1, 8, 0, 24, 19, 4, 14, 11, 5, 17, 3, 9, 12, 2, 21, 15, 22, 16, 23, 20, 6, 10, 18];

    r1.forEach((char, index) => {
        mappings[char] = r2[mappingValues[index]];
    });

    let encryptedMessage = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ') {
            encryptedMessage += ' ';
        } else {
            let char = input[i].toUpperCase();
            encryptedMessage += mappings[char] ? mappings[char] : char;
        }
    }

    // Покажемо результат шифрування після завершення операції шифрування
    let text = document.getElementById('textOut');
    text.innerHTML = encryptedMessage;
}
function resetEn() {
    let text = document.getElementById('textOut');
    text.textContent = "";
}
function rotateRotor(rotor, position) {
    position %= rotor.length;
    return rotor.slice(position).concat(rotor.slice(0, position));
}

function copyEnc() {
    const paragraph = document.getElementById("textOut");
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(paragraph);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    console.log("Текст скопійовано: ", paragraph.textContent);
}






// Додайте код для розшифрування тут, починаючи з prompt для позиції роторів і т.д.

const numberInput3 = document.getElementById('rotor1-1');
const wheel3 = document.getElementById('wheel3');
const clickSound3 = document.getElementById('clickSound3');

numberInput3.addEventListener('input', () => {
    const value = numberInput3.value;
    const degrees = 360 - ((value - 1) * (360 / 26)); // обчислюємо градуси для обертання в іншу сторону
    wheel3.style.transform = `rotate(${degrees}deg)`; // повертаємо колесо

    // Відтворення звуку щокання
    clickSound3.currentTime = 0; // Скидання часу аудіофайлу до початку
    clickSound3.play(); // Відтворення звуку
});

const numberInput4 = document.getElementById('rotor2-2');
const wheel4 = document.getElementById('wheel4');
const clickSound4 = document.getElementById('clickSound4');

numberInput4.addEventListener('input', () => {
    const value = numberInput4.value;
    const degrees = 360 - ((value - 1) * (360 / 26)); // обчислюємо градуси для обертання в іншу сторону
    wheel4.style.transform = `rotate(${degrees}deg)`; // повертаємо колесо

    // Відтворення звуку щокання
    clickSound4.currentTime = 0; // Скидання часу аудіофайлу до початку
    clickSound4.play(); // Відтворення звуку
});



function getDecrypt(event) {
    event.preventDefault();
    // Отримання вхідних даних
    let rotorPosition1 = parseInt(document.getElementById('rotor1-1').value);
    let rotorPosition2 = parseInt(document.getElementById('rotor2-2').value);

    // Перевірка чи коректні введені позиції роторів
    if (!(rotorPosition1 >= 1 && rotorPosition1 <= 26) || !(rotorPosition2 >= 1 && rotorPosition2 <= 26)) {
        console.log("Enter a number between 1 and 26");
        return; // Зупиняємо виконання, якщо позиції роторів введено неправильно
    }

    // Функція для обертання роторів
    function rotateRotor(rotor, position) {
        position %= rotor.length;
        return rotor.slice(position).concat(rotor.slice(0, position));
    }

    let r1Decryption = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let r2Decryption = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    // Обертання роторів
    r1Decryption = rotateRotor(r1Decryption, rotorPosition1);
    r2Decryption = rotateRotor(r2Decryption, rotorPosition2);

    // Описуємо відображення
    const mappingValues = [13, 25, 7, 1, 8, 0, 24, 19, 4, 14, 11, 5, 17, 3, 9, 12, 2, 21, 15, 22, 16, 23, 20, 6, 10, 18];
    const reverseMappings = {};
    r1Decryption.forEach((char, index) => {
        reverseMappings[r2Decryption[mappingValues[index]]] = char;
    });

    let input = document.getElementById('decryptMessage').value;
    let decryptedMessage = "";

    for (let i = 0; i < input.length; i++) {
        let char = input[i].toUpperCase();
        if (reverseMappings[char]) {
            decryptedMessage += reverseMappings[char];
        } else {
            decryptedMessage += char;
        }
    }

    // Встановлюємо результат розшифрування
    let decText = document.getElementById('decryptTextOut');
    decText.textContent = decryptedMessage;
}

function resetEn() {
    let decText = document.getElementById('decryptTextOut');
    decText.innerHTML = '';
}

function copyDec() {
    const paragraph = document.getElementById("decryptTextOut");
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(paragraph);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    console.log("Текст скопійовано: ", paragraph.textContent);
}