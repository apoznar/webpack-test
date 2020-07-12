import '../scss/main.scss';

/* place your code below */

const firstName = "Adam";
const age = 29;

const welcome = (name, age) => {
  console.log(
    `Cześć, nazywam się ${name} i mam ${age} lat :) Ta linia jest efektem działania funkcji.`
  );
};

welcome(firstName, age);

console.log(
  `Cześć, nazywam się ${firstName} i mam ${age} lat :) Ta linia jest efektem wyświetlania zmiennych w łańcuchu znaków.`
);

const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});
