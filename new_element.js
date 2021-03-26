x = 4;
var mnth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var a = new Date();
var y = a.getMonth();
var x = a.getFullYear();
var z = a.getDate();

var mnthscal1 = document.getElementById("mnth");
var mnthscal2 = document.getElementById("mnths");
var yrscal1 = document.getElementById("year");
var yrscal2 = document.getElementById("years");
f = 0;
m = 0;
var dat = z + mnth[y] + x;
var data;
//var today;
var textcounter = 0;

function clearAllHighlights() {
  Array.prototype.forEach.call(
    document.getElementsByClassName("day-hover"),
    function (element) {
      element.classList.remove("datehighlight");
    }
  );
}

function todayhighlight() {
  clearAllHighlights();
  let today = new Date();
  let r = today.getDate();
  if (y == a.getMonth() && x == a.getFullYear()) {
    document
      .getElementsByClassName("day-hover")
      [r - 1].classList.add("datehighlight");
    document
      .getElementsByClassName("day-hover")
      [r + 30].classList.add("datehighlight");
  }
}
setInterval(todayhighlight, 500);

function dateset(date) {
  document.getElementById("butOne").disabled = false;
  document.getElementById("butTwo").disabled = false;
  datedeselected();

  z = date;
  dat = date + mnth[y] + x;
  data = localStorage.getItem(dat);
  console.log(data);
  console.log(dat);

  function datedata() {
    document.getElementById("waveup").style.height = data * 10 + "%";
    document.querySelector(".wave1before").style.height = data * 10 + "%";
    document.getElementById("glassesdrunk").innerHTML = data;
  }
  datedata();

  function resetdata() {
    if (localStorage.getItem(dat)) {
      f = parseInt(data);
    } else {
      f = 0;
      m = 0;
    }
  }
  resetdata();
  dateselected();
}

function currMonth() {
  mnthscal1.innerHTML = mnth[y];
  mnthscal2.innerHTML = mnth[y];
  yrscal1.innerHTML = x;
  yrscal2.innerHTML = x;
}
function monthChange() {
  if (y < 11) {
    y = y + 1;
    mnthscal1.innerHTML = mnth[y];
    mnthscal2.innerHTML = mnth[y];
    yrscal1.innerHTML = x;
    yrscal2.innerHTML = x;
  } else {
    x = x + 1;
    y = 0;
    mnthscal1.innerHTML = mnth[y];
    mnthscal2.innerHTML = mnth[y];
    yrscal1.innerHTML = x;
    yrscal2.innerHTML = x;
  }
}

function notmonthChange() {
  if (y > 0) {
    y = y - 1;
    mnthscal1.innerHTML = mnth[y];
    mnthscal2.innerHTML = mnth[y];
    yrscal1.innerHTML = x;
    yrscal2.innerHTML = x;
  } else {
    x = x - 1;
    y = 11;
    mnthscal1.innerHTML = mnth[y];
    mnthscal2.innerHTML = mnth[y];
    yrscal1.innerHTML = x;
    yrscal2.innerHTML = x;
  }
}

function monthDays() {
  if (x % 4 == 0 && y == 1) {
    document.getElementById("hide1").style.visibility = "hidden";
    document.getElementById("hide2").style.visibility = "hidden";
    document.getElementById("hides1").style.visibility = "hidden";
    document.getElementById("hides2").style.visibility = "hidden";
  } else if (x % 4 != 0 && y == 1) {
    document.getElementById("hide1").style.visibility = "hidden";
    document.getElementById("hide2").style.visibility = "hidden";
    document.getElementById("hide3").style.visibility = "hidden";
    document.getElementById("hides1").style.visibility = "hidden";
    document.getElementById("hides2").style.visibility = "hidden";
    document.getElementById("hides3").style.visibility = "hidden";
  } else if (y == 3 || y == 5 || y == 8 || y == 10) {
    document.getElementById("hide1").style.visibility = "hidden";
    document.getElementById("hide2").style.visibility = "visible";
    document.getElementById("hide3").style.visibility = "visible";
    document.getElementById("hides1").style.visibility = "hidden";
    document.getElementById("hides2").style.visibility = "visible";
    document.getElementById("hides3").style.visibility = "visible";
  } else {
    document.getElementById("hide1").style.visibility = "visible";
    document.getElementById("hide2").style.visibility = "visible";
    document.getElementById("hide3").style.visibility = "visible";
    document.getElementById("hides1").style.visibility = "visible";
    document.getElementById("hides2").style.visibility = "visible";
    document.getElementById("hides3").style.visibility = "visible";
  }
}

function myFunc() {
  if (f < 10) {
    f = f + 1;
    m = f * 10;

    document.getElementById("waveup").style.height = m + "%";
    document.querySelector(".wave1before").style.height = m + "%";
    document.getElementById("glassesdrunk").innerHTML = f;
  } else {
    m = 100;
    f = f + 1;
    document.getElementById("glassesdrunk").innerHTML = f;
  }

  setdaTa();
}

function notmyFunc() {
  if (m > 0 && f <= 10) {
    m = m - 10;
    f = f - 1;
    document.getElementById("waveup").style.height = m + "%";
    document.querySelector(".wave1before").style.height = m + "%";
    document.getElementById("glassesdrunk").innerHTML = f;
  } else if (f > 0) {
    a = 0;
    f = f - 1;
    document.getElementById("glassesdrunk").innerHTML = f;
  } else {
    a = 0;
    f = 0;
    document.getElementById("glassesdrunk").innerHTML = f;
  }
  setdaTa();
}

function setdaTa() {
  localStorage.setItem(dat, f);
}
function register() {
  usrname = document.getElementById("registername").value;

  localStorage.setItem("username", usrname);
  registered();
}
function registered() {
  if (localStorage.getItem("username")) {
    document.getElementById("registername").style.display = "none";
    document.getElementById("registeredname").innerHTML = localStorage.getItem(
      "username"
    );
    document.getElementById("buttons").classList.remove("invisible");
  }
}
registered();

function datedeselected() {
  for (day = 0; day <= 61; day++) {
    document
      .getElementsByClassName("day-hover")
      [day].classList.remove("datehighlight1");
  }
}

function dateselected() {
  document
    .getElementsByClassName("day-hover")
    [parseInt(z) - 1].classList.add("datehighlight1");
  document
    .getElementsByClassName("day-hover")
    [parseInt(z) + 30].classList.add("datehighlight1");
}
var parag = 0;
function paragraphChanger() {
  document.getElementsByClassName("animate")[parag].classList.add("invisible");
  document
    .getElementsByClassName("animate")
    [parag + 1].classList.remove("invisible");
  parag++;
  if (parag == 4) {
    document.getElementsByClassName("animate")[4].classList.add("invisible");
    document.getElementsByClassName("animate")[0].classList.remove("invisible");
    parag = 0;
  }
}
setInterval(paragraphChanger, 10000);
setTimeout(() => {
  document.querySelector(".ocean").style.overflow = "hidden";
}, 5500);
