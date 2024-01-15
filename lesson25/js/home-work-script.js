// Завдання 1
// Отримати в константу елемент <body>

const bodyElement = document.body
console.log(bodyElement)

// =========================================================================

// Завдання 2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

/* <div class="body__container">
        <h3 class="add-title">Новий список, доданий функцією (завдання 2)</h3>
        <ul class="add-list">
        </ul>
    </div> */


// створюю функцію із параметрами 
function createList(num = 3, place = "afterbegin", code, choose, otherPlace = "beforeend") {
    num = parseInt(num) //для безпеки перетворюю це на число і ціле, щоб був повний цикл
    bodyElement.insertAdjacentHTML(place, code)
    // обираємо елеменt
    const list = document.querySelector(choose)
    for (let i = 1; i <= num; ++i) {
        list.insertAdjacentHTML(otherPlace, `
            <li class="add-list__item">Item #${i}</li>
        `)
    }
}
// я спробував такий варіант, можна було б простіше, але я хотів, щоб можна було
// змінювати код та його положення легко
createList(5, "afterbegin", `<div class="body__container">
<h3 class="add-title">Новий список, доданий функцією (завдання 2)</h3>
<ul class="add-list"></ul></div>`, ".add-list")

// =========================================================================

// Завдання 3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зелений.


//bodyElement.classList.add('loaded')

// додаємо клас елементу через функцію
function setClassToElement(element, name) {
    element.classList.add(name)
}
setClassToElement(bodyElement, 'loaded')

function classContain(element, name, color) {
    if (element.classList.contains(name)) {
        bodyElement.style.color = color
    }
}
classContain(bodyElement, 'loaded', '#06ff12')

// =========================================================================

// Завдання 4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active,
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".


// отримуємо доступ до всіх item
const itemElements = document.querySelectorAll('.item');
console.log(itemElements);

// створюю функію з параметром елемента
function rewriteContent(elements) {
    // це лічильник
    let n = 0
    for (let i = 0; i < elements.length; ++i) {
        // інкрементую лічильник для кожного наступного елемента
        ++n
        // переписую текст всередині (безпечніший варіант, ніж innerHTML)
        elements[i].textContent = `Елемент №${n}`;
    }

    // elements.forEach((item, index) => {
    //     item.textContent = `Елемент №${index}`
    // })
}

rewriteContent(itemElements);

// =========================================================================

// Завдання 5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

// отримуємо доступ до кнопки
const button = document.querySelector('.button');

// просто функція для скролу
function scrollTo(element, block = "center", inline = "nearest", behavior = "smooth") {
    element.scrollIntoView({
        block: block,
        inline: inline,
        behavior: behavior
    })
}
scrollTo(button, "end")

// =========================================================================

// Завдання 6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний


// отримуємо доступ до всіх посилань
// до всіх, бо я хотів спробувати метод, коли в нас багато однакових посилань
const link = document.querySelectorAll(".link")

// функція, яка встановлює нам DATA-атирибут для кожного введеного елемента
function setDataAttribute(elements, name, value) {
    // використовую цикл, бо при querySelectorAll нам повертається
    // список, тому опрацьовувати потрібно кожен елемент
    elements.forEach(element => {
        element.setAttribute(name, value)
    });
}
// виклик та встановлення функції
setDataAttribute(link, "data-animation", 100)


// функція, яка повертає нам значення певного ДАТА-атрибуту 
// Також тут одразу переводимо значення в число
function getDataAttribute(element, name) {
    let value;
    element.forEach(item => {
        value = item.getAttribute(name)
        value = parseInt(value)
    })
    return value
}
console.log(getDataAttribute(link, 'data-animation'))


// функція, яка змінює колір елемента при умові коли значення не більше ліміту 
function changeDataAttribute(elements, name, limit, color) {
    // перебираємо кожен елемент у колекції
    elements.forEach(item => {
        // створюємо зміну, яка використовує готову функію для отримання значення
        // саме тут довго грався, бо не міг зрозуміти, чому так [item] працює
        // а так item - ні. Теоретично - це тому що ми звертаємось до певного елемент в масиві усіх елементів
        // але до кінця я цього не зрозумів
        let elementValue = getDataAttribute([item], name)
        // проста умова
        if (elementValue < limit) {
            item.style.color = color
        } else {
            console.log('Element has more than 200')
        }
    })
}
// виклик нашої функції
changeDataAttribute(link, 'data-animation', 200, 'red')