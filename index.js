const firstCurrencyEl = document.getElementById("first-currency");
const firstWorthEl = document.getElementById("first-worth");

const secondCurrencyEl = document.getElementById("second-currency");
const secondWorthEl = document.getElementById("second-worth");

const exchangeRateEl = document.getElementById("exchange-rate");

// Initialize the rate on page load
//  updateRate();

function updateRate() {
     fetch(`https://v6.exchangerate-api.com/v6/f13832320c4d4c104ff9731f/latest/${firstCurrencyEl.value}`).then((res) => res.json()).then((data) => {
        const rate = data.conversion_rates[secondCurrencyEl.value];
        exchangeRateEl.innerText = `1 ${firstCurrencyEl.value} = ${rate + " " + secondCurrencyEl.value}`;
        secondWorthEl.value = (firstWorthEl.value * rate).toFixed(3);
     });
}

firstCurrencyEl.addEventListener("change", updateRate);
secondCurrencyEl.addEventListener("change", updateRate);
firstWorthEl.addEventListener("input", updateRate);

const navbar = document.querySelector(".nav_bar");
const navTabs = document.querySelector (".nav-tabs");
window.addEventListener("scroll", () => {
  if(window.scrollY >= 100) {
     navbar.classList.add("scrolled");
  } else {
     navbar.classList.remove("scrolled");
  }
});

const hamburgerToggle = document.querySelector("#hamburger-toggle");
const navBar = document.querySelector("#navbar");

hamburgerToggle.addEventListener("click", onHamburgerClick);
function onHamburgerClick() {
  if (!navbar.classList.contains("open")) {
     navbar.classList.add("open");
  } else {
     navbar.classList.remove("open");
  }
  
}

 







