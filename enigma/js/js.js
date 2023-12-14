// const icon = document.querySelector('.menu__burger');
// icon.addEventListener('click', function () {
//     document.documentElement.classList.toggle('menu-open');
// });

// const filter = document.querySelector('.filter__main-name');
// filter.addEventListener('click', function () {
//     document.documentElement.classList.toggle('filter-open');
// });


function getEncrypt(event) {
    event.preventDefault();
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