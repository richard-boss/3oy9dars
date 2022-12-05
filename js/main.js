var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elResult1 = document.querySelector(".result1");
var elResult2 = document.querySelector(".result2");
var elResult3 = document.querySelector(".result3");
var elResult4 = document.querySelector(".result4");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  function userSpeed(elInputValue, user) {
    var user = 3.6;
    var elInputValue = +elInput.value;
    return (elInputValue / user).toFixed(2) + " Soat";
  }
  elResult1.textContent = userSpeed();

    function unicycleSpeed(elInputValue, bycicle) {
      var bycicle = 20.1;
      var elInputValue = +elInput.value;
      return (elInputValue / bycicle).toFixed(2) + " Soat";
    }
  elResult2.textContent = unicycleSpeed();

  function racingSpeed(elInputValue, car) {
    var elInputValue = +elInput.value;
    var car = 70;
    return (elInputValue / car).toFixed(2) + " Soat";
  }
  elResult3.textContent = racingSpeed();

  function sendSpeed(elInputValue, airPlane) {
    var airPlane = 800;
    var elInputValue = +elInput.value;
    return (elInputValue / airPlane).toFixed(2) + " Soat";
  }
  elResult4.textContent = sendSpeed();
});