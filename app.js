// let user = {
//   name: "Ivan",
//   age: 20,
// };

// console.log(JSON.parse(JSON.stringify(user)));

// Асинхронные
// console.log("привет1");
// console.log("привет2");
// console.log("привет4");
// console.log("привет5");
// setTimeout(function () {
//   console.log("привет3");
// }, 0);

// console.log("request data...");

// const userData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Preparing data...");

//     const user = {
//       name: "Alex",
//       age: 20,
//     };
//     resolve(user);
//   }, 2000);
// });

// userData.then((data) => console.log(data));

// let btn = document.querySelector("button");

// function myAvatar() {
//   fetch("https://api.github.com/users/AnDreW-Civik")
//     .then((response) => response.json())
//     .then((user) => {
//       let img = document.createElement("img");
//       let avatar = user.avatar_url;
//       img.setAttribute("src", avatar);
//       document.body.prepend(img);
//       btn.disabled = true;
//     });
// }

// btn.addEventListener("click", myAvatar);

// class Article {
//   constructor(title, src, descript, name, parent) {
//     (this.title = title),
//       (this.src = src),
//       (this.descript = descript),
//       (this.name = name),
//       (this.parent = document.querySelector(parent));
//   }
//   render() {
//     let article = document.createElement("article");
//     article.classList.add("col-6");
//     article.innerHTML = `
//     <div class="article">
//       <h2 class="article-title">${this.title}</h2>
//       <div class="article-img">
//       <img src=${this.src} alt="Beach">
//       </div>
//       <div class="article-description"> ${this.descript}</div>
//       <div class="article-name">Author: ${this.name}</div>
//     </div>`;
//     this.parent.append(article);
//   }
// }

// new Article(
//   "News 1",
//   "img/beach.jpg",
//   "Hello world",
//   "AG",
//   ".articles"
// ).render();

// new Article(
//   "News 2",
//   "img/beach.jpg",
//   "Hello world",
//   "AG",
//   ".articles"
// ).render();

// fetch("db.json")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

class Weather {
  constructor(data, parent) {
    (this.input = data.input),
      (this.name = data.name),
      (this.temp = data.main.temp),
      (this.feels_like = data.main.feels_like),
      (this.pressure = data.main.pressure),
      (this.description = data.weather[0]["description"]),
      (this.humidity = data.main.humidity),
      (this.speed = data.wind.speed),
      (this.deg = data.wind.deg),
      (this.icon = data.weather[0]["icon"]),
      (this.parent = document.querySelector(".article"));
  }

  render() {
    let article = document.createElement("div");
    article.classList.add("col-12");
    article.innerHTML = `
    <div class="weather">
      <h2 class="weather-name">${this.name}</h2>
      <div class="weather-temp">Температура: ${
        Math.round(this.temp) + "&deg" + "C"
      }</div>
      <div class="weather-pressure">Ощущается как: ${
        Math.round(this.feels_like) + "&deg" + "C"
      }</div>
            <div class="weather-pressure">Давление: ${
              this.pressure
            }  мм рт. ст.</div>
      <div class="weather-description">Погода: ${this.description}</div>
      <div class="weather-humidity">Влажность: ${this.humidity}%</div>
      <div class="weather-speed">Скорость ветра: ${this.speed} км/ч</div>
      <div class="weather-deg">Направление ветра: ${this.deg}&deg</div>
            <img src ='http://openweathermap.org/img/w/${
              this.icon
            }.png' class="weather-icon"></img>
    </div>`;

    this.parent.prepend(article);
  }
}

let inputt = document.querySelector(".inp");
let buttonWeather = document.querySelector(".btn-for-weather");

buttonWeather.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputt.value}&units=metric&APPID=5d066958a60d315387d9492393935c19&lang=ru`
  )
    .then((response) => response.json())
    .then((data) => new Weather(data, parent).render());

  inputt.value = "";
});

document.addEventListener("DOMContentLoaded", function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Kharkiv&units=metric&APPID=5d066958a60d315387d9492393935c19&lang=ru`
  )
    .then((response) => response.json())
    .then((data) => new Weather(data, parent).render());
});
