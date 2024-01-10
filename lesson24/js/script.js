"use strict"
// практика
// можливо мало попрактикувався, але наступного разу буду більше, цього просто часу не вистачало
// -------------------------------------------------
// присвоєння. Змінюємо масив
let animalsArray = ["Cat", "Fish", "Tiger", "Lion", "Lemur", "Komodo"]
console.log(animalsArray)
let newAnimalsArray = [];
for (let i = 0; i < animalsArray.length; ++i) {
    newAnimalsArray.push("Awesome " + animalsArray[i])
}
console.log(newAnimalsArray)
// -------------------------------------------------
// Просто генератор образливих слів
let randomBodyPart = ["Nose", "Hair", "Face"]
let randomAdjectives = ["Smelly", "Boring", "Stupid"]
let randomWord = ["Fly", "Marmot", "Stick", "Monkey", "Rat"]
function showRandomWord(random) {
    return random[Math.floor(Math.random() * random.length)]
}
function showResultString(one, two, three) {
    console.log(`Your ${one} is like a ${two} ${three}!!!`)
}
showResultString(showRandomWord(randomBodyPart), showRandomWord(randomAdjectives), showRandomWord(randomWord))
// -------------------------------------------------
// Оператори порівняння
let someX = "10"
if (10 > someX || 11 === "11" && 11 == ++someX) {
    console.log('True')
} else {
    console.log('Wrong')
}
// -------------------------------------------------
// car
let myCar = ["Lamborgini", "Volvo", "Mercedes", "Bugatti", "Fararri"]
console.log('This my cars:')
console.log(myCar)
myCar.push("Audi")
console.log('This my new cars:')
console.log(myCar)
myCar.forEach((value, index) => {
    if (value === "S") {
        console.log('This is not cool')
    } else if (value === "Nissan") {
        console.log('Coo, are you use it?')
    } else if (value !== "Tesla") {
        console.log('You don`t have Tesla? Buy it now!')
    } else {
        console.log('Do you have a really cool cars?')
    }
})
// -------------------------------------------------
let e = 10 > 5 ? "It`s ok" : null
// -------------------------------------------------
// стрілочна функція Додавання
let calcShowSum = (num1, num2) => {
    let sumResult = +num1 + +num2
    console.log(`The sum of ${num1} and ${num2} is ${sumResult}`)
}
calcShowSum(2, 5)
// калькулятор
// 1 - додавання
// 2 - віднімання
// 3 - множення
// 4 - ділення
// 5 - визначення цілої частини від ділення
// задайте одне із цих значень для setStyle
let setStyle;
let calculate = (en1, en2) => {
    if (setStyle === 1) {
        return +en1 + +en2
    } else if (setStyle === 2) {
        return en1 - en2
    } else if (setStyle === 3) {
        return en1 * en2
    } else if (setStyle === 4) {
        if (en2 === 0) {
            console.log("Ділення на нуль неможливе")
        } else {
            return en1 / en2
        }
    } else if (setStyle === 5) {
        return en1 % en2
    } else {
        return `None`
    }
}
function showCalculate(text = 'None operation') {
    if (setStyle === 1) {
        console.log(`Результат додавання ${text}`)
    } else if (setStyle === 2) {
        console.log(`Результат віднімання ${text}`)
    } else if (setStyle === 3) {
        console.log(`Результат множення ${text}`)
    } else if (setStyle === 4) {
        console.log(`Результат ділення ${text}`)
    } else if (setStyle === 5) {
        console.log(`Результат цілої частини ${text}`)
    } else {
        console.log(`The result is ${text}`)
    }
}
setStyle = 5
showCalculate(calculate(4, 3))


// =============================================================================================
// Відповіді на д/з

//Task 1
console.log(`Task 1`)

// Створення нової змінної
let someVar = 0
// інкрементування змінної, тобто тепер вона дорівнює 1
++someVar
// вітвлення, яке виконається через те, що змінна = 1, а отже це true і тіло циклу виконається
if (someVar) {
    // виведеться 1
    console.log(someVar)
}
console.log()
// ---------------------------------------------------------------------------------

//Task 2
console.log(`Task 2`)

// створюємо цикл, в якому в нас початкова умова це 1
// умова закінчення - коли змінна "і" буде менше 10
// крок в нас буде інкеремтування на кожному колі циклу 
for (let i = 1; i <= 10; ++i) {
    // виводимо в консоль текст і завдяки лапкам втсавляємо поточний індекс. Все просто
    console.log(`Пункт №${i}`)
}

console.log()
// ---------------------------------------------------------------------------------

//Task 3
console.log(`Task 3`)

if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
    console.log('000');
}

// Крок 1. Пріоритет операторів порівняння
// if (false || false && true || false) {}

// Крок 2. Пріоритет && (Буде false, бо один із оперантів false)
// if (false || false || false) {}

// Крок 3. || (Повертає останній false, бо немає жодного true)
// if (false) {}

//! Відповідь: Отже тіло циклу не виконається і нічого не виведеться в консоль

console.log()
// ---------------------------------------------------------------------------------
// Task 4
console.log(`Task 4`)

// ми створюємо функцію, яка буде мати початкові параметри а і b 
function calcDiv(a = 1, b = 1) {
    // ми перевіряємо чи друге число не дорівнює 0, щоб не отримати безкінечності
    if (b === 0) {
        return 'Неможливо поділити на нуль';
    }
    // тут ми перевіряємо тип введених даних, якщо вони не числа то ми повертаємо помилку
    else if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Некоректні дані, будь ласка введіть число';
    }
    // якщо перевірка пройшла успішно - виконуємо ділення
    else {
        var result = a / b;
        return result;
    }
}

// створюємо функцію для показу результату із початковими параметрами
function showCalc(text = 'None') {
    console.log(`Результат ділення буде: ${text}`)
}
//викликаємо функцію для показу інформації та кажемо показати нам результат ділення числа 13 на 2
showCalc(calcDiv(13, 2))

console.log()
// ---------------------------------------------------------------------------------
//Task 5
console.log(`Task 5`)

// створюємо довільний масив. Довший для наглядності
let array = [3, 2, 1, -4, 23, 11, 23, 67, 206, 0, 44, 432, 10, 6, 65, 10]

// перебираємо елементи масиву
array.forEach((value, index) => {
    // робимо перевірку чи немає в циклі числа 10
    // якщо є виводимо його і вказуємо в якому місці
    if (value === 10) {
        console.log(`We find ${value} and his index in massive is ${index}`)
    }
})


// 
console.log()
let fun = (a, b) => {
    return a + b;
}
console.log(fun(5, 10));

