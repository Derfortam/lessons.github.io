"use strict"
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, onValue, push, child} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
   databaseURL: "https://songs-ecde1-default-rtdb.europe-west1.firebasedatabase.app/",
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const songInDB = ref(database, "songs")

document.addEventListener("DOMContentLoaded", function () {
   let songId = localStorage.getItem("songId") // Отримуємо ID пісні з localStorage
   console.log("ID пісні:", songId)

   console.log(songInDB)
   let number = localStorage.getItem("number")
   number = parseInt(number)
   console.log(localStorage.getItem("number"))

   onValue(songInDB, function (snapshot) {
      // now it is array
      if (snapshot.exists()) {
         let songArray = Object.values(snapshot.val())
         let currentBook = songArray[number - 1]
         // console.log(currentBook)
         const songInput = document.querySelector("#song")
         // console.log(songInput)
         if (songInput) {
            songInput.innerHTML = currentBook
         } else {
            console.log("rrr")
         }
         // if (currentBook === undefined) {
         //    songInput.innerHTML = songArray[songArray.length - 1]
         // }

         // console.log(songArray[songArray.length - 1])
      } else {
         // let currentBook = songArray[songArray.length - 1]
         // const songInput = document.querySelector("#song")
         // if (songInput) {
         //    songInput.innerHTML = songArray[songArray.length - 1]
         // }
      }
   })
})
