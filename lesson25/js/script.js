"use strict"
//console.log(document.documentElement)

// window 
// отримання ширини та висоти екрану
const displayWidth = window.innerWidth
const displayHeight = window.innerHeight
console.log(`Ширина екрану складає ${displayWidth}px, а висота - ${displayHeight}px`)

if (displayWidth <= 456) {
    console.log('Змінити стилі для html')
}
console.log()

// BOM
// navigator.userAgent
const usersAgent = navigator.userAgent
console.log(usersAgent)
if (usersAgent.includes('Firefox')) {
    console.log('We work with Firefox')
} else if (usersAgent.includes('Chrome')) {
    console.log('We work with Chrome')
} else {
    console.log('We work with other')
}
console.log()

// navigator.platform
const userPlatform = navigator.platform
//const newUserPlatform = navigator.userAgentData.platform
console.log(userPlatform)
//console.log(newUserPlatform)
console.log()

// navigator.location
let ourLocation = location.href
console.log(ourLocation)
if (ourLocation.includes('index')) {
    ourLocation += '#popular'
}
console.log(ourLocation)
console.log()

// alert
//alert('Good lack, user')

// confirm
// let questionConfirm = confirm('Do you want to continue')
// console.log(questionConfirm)
// if (questionConfirm) {
//     console.log('Continue propram')
// } else {
//     console.log('Exit from propram')
// }

// prompt
// let questionPrompt = prompt('Enter your name')
// console.log(questionPrompt)
// if (questionPrompt) {
//     console.log(`The name of user is ${questionPrompt}`)
// } else if (questionPrompt === null) {
//     console.log('User do not enter a name')
// } else {
//     console.log('User do not enter a name')
// }

//! ----------------------------------------------------------------------
// DOM
// html
const htmlDOM = document.documentElement
console.log(htmlDOM)
console.log()

// head
const headHTML = document.head
console.log(headHTML)
console.log()

// body
const bodyHTML = document.body
console.log(bodyHTML)
console.log()

// перші та останні дочірні елементи
const firstHeadChild = headHTML.firstElementChild
const lastHeadChild = headHTML.lastElementChild
console.log(`Перший дочірній елемент head`)
console.log(firstHeadChild)
console.log()
console.log(`Останній дочірній елемент head`)
console.log(lastHeadChild)
console.log()

// усі дочірні елементи Body
const bodyChild = bodyHTML.children
console.log(`Усі дочірні елементи body`)
console.log(bodyChild)
console.log()
console.log('Метод перебору for...of:')
for (let bodyChildsNodes of bodyChild) {
    console.log(bodyChildsNodes)
}
console.log()

// знаходження сусідів Body
const previousBody = bodyHTML.previousElementSibling
console.log(previousBody)
const nextBody = bodyHTML.nextElementSibling
console.log(nextBody)

// ---------------------------------------------------------------
// пошук та отримання довільного результату
// document.querySelector
// тег
const liElement = document.querySelector('li');
console.log(`Перший знайдений тег li - це:`);
console.log(liElement);

if (liElement) {
    console.log('We work with this element');
} else {
    console.log('Елемент не знайдено');
}

// усі знайдені теги
console.log(`Усі знайдені теги p - це:`);
const allparElement = document.querySelectorAll('p');
console.log(allparElement);
if (allparElement.length) {
    console.log('We work with this element');
} else {
    console.log('Елемент не знайдено');
}
console.log()
// селектор класів
const text = document.querySelectorAll('.page__text')
console.log(text)
console.log()
const activeLi = document.querySelectorAll('.page__item.active')
console.log(activeLi)
console.log()
const containers = document.querySelectorAll('[class*="__container"]')
console.log(containers)
console.log()

//селектор ID
const titleID = document.querySelector('#title')
console.log(titleID)
if (titleID) {
    console.log('We work with Title')
} else {
    console.log('Does not exist')
}
console.log()
// перевірка батька
const parentForID = titleID.parentElement
if (parentForID) {
    console.log(parentForID)
} else {
    console.log('Not exist')
}
console.log()

// closest
const liItem = document.querySelector('.page__item')
const parentLiItem = liItem.closest('.page__item')
console.log(parentLiItem)


// -------------------------------------------------------------
// зміна документу
const title = document.querySelectorAll('.page__title')

title.forEach((element) => {
    console.log(element.innerHTML)
});
title.forEach((text) => {
    text.innerHTML = `<i>Before</i> eat, wash your hands`
});
console.log()

const list = document.querySelectorAll('.page__list')
list.forEach((element) => {
    console.log(element.textContent)
});
list.forEach((element) => {
    element.textContent = 'Hello<br>'
});

console.log()

// створення об'єкта

let newObject = document.createElement('section')
// не в html
newObject.innerHTML = `<div class="section__container"><p>Other text</p></div>`
// досі не в html
const pageContainer = document.querySelector('.page__container')

pageContainer.before(newObject)
//pageContainer.after(newObject)
//pageContainer.prepend(newObject)
//pageContainer.append(newObject)

// ------------------------------------------------------------

pageContainer.insertAdjacentHTML("beforeend", `
    <section class="block">
        <h2 class="block__title">New Title</h2>
        <div class="block__text">
            <p>or sit amet consectetur, adipisicing elit. Non voluptatem possimus, debitis neque
            qui odio voluptate, dolore totam doloremque repudiandae, quia sequi itaque ipsum magnam
            voluptatibus corrupti exercitationem </p>
        </div>
    </section>
`)

// клонування об'єкту
let newPage = pageContainer.cloneNode(true)
console.log(newPage)
pageContainer.insertAdjacentElement("afterend", newPage);

// видалення
//newPage.remove()

// ====================================================================
// управління стилями

const p = document.querySelector('p')
p.style.backgroundColor = 'red'
p.style.padding = '20px'
// тут ми додаємо щось і це має найвищий пріоритет


// а тут ми перезаписуємо стилі
p.style.cssText = `
    color: black;
    line-height: 1.3;
    background-color: yellow;
`

console.log(getComputedStyle(p))

console.log()

const h2 = document.querySelector('h2');
const attributeExists = h2.hasAttribute('id');
console.log(attributeExists);
const attributeGet = h2.getAttribute('id');
console.log(attributeGet)
const attributeSet = h2.setAttribute('data-speed', '3000');
//const attributeRemove = h2.removeAttribute('id');

let speed = h2.dataset.speed
console.log(parseFloat(speed))

// ---------------------------------------
// other

// tag
list.forEach((item) => {
    console.log(item.tagName);
});

// ширина і висота
const main = document.body
console.log(main.clientHeight)
console.log(main.clientWidth)


const link = document.querySelector('.page__link');

function scroll(element) {
    element.scrollIntoView({
        block: "end",
        inline: "nearest",
        behavior: "smooth"
    });
}

scroll(link);
