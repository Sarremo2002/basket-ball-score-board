let homeSCORE = document.getElementById("home-score");
let guestSCORE = document.getElementById("guest-score");
let count1 = 0;
let count2 = 0;

function add1() {
  count1 += 1;
  homeSCORE.textContent = count1;
}

function add2() {
  count1 += 2;
  homeSCORE.textContent = count1;
}
function add3() {
  count1 += 3;
  homeSCORE.textContent = count1;
}

function add11() {
  count2 += 1;
  guestSCORE.textContent = count2;
}

function add22() {
  count2 += 2;
  guestSCORE.textContent = count2;
}

function add33() {
  count2 += 3;
  guestSCORE.textContent = count2;
}
