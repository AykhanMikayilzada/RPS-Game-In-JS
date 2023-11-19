const input = document.querySelector("input");
const button = document.querySelector("button");
const info = document.querySelector(".info");
const list = document.querySelector(".list");
let data = [];
button.addEventListener("click", function () {
  let value = input.value;

  if (value === "") {
    alert("Zəhmət olmasa məlumatı daxil edin.");
  } else {
    data.push(value);
  }
  let result = data
    .map(function (el, index) {
      return `<li>${index + 1 + ")"} ${el}</li>`;
    })
    .join("");

  list.innerHTML = result;
  input.value = "";
});
window.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    let value = input.value;

    if (value === "") {
      alert("Zəhmət olmasa məlumatı daxil edin.");
    } else {
      data.push(value);
    }
    let result = data
      .map(function (el, index) {
        return `<li>${index + 1 + ")"} ${el}</li>`;
      })
      .join("");

    list.innerHTML = result;
    input.value = "";
  }
});
