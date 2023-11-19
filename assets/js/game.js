let player_choise_img = document.querySelector("#player_choise_img");
let comp_choise_img = document.querySelector("#comp_choise_img");
let howTo = document.querySelector("#howTo");
let about_player = document.querySelector("#about_player");
let about_comp = document.querySelector("#about_comp");
let cNumber = document.querySelector(".cNumber");
let pNumber = document.querySelector(".pNumber");
let keys = ["r", "p", "s"]
let myScore = 0
let compScore = 0

window.addEventListener("keypress", function (event) {
  let random = Math.floor(Math.random() * keys.length);
  let compChoise = keys[random];
  let userChoise = event.key;

  if (userChoise == "r") {
    player_choise_img.innerHTML = `<img src="./assets/imgs/rock.png" width="300px" />`;
    howTo.style = `visibility: hidden;`;
  } else if (userChoise == "p") {
    player_choise_img.innerHTML = `<img src="./assets/imgs/paper.png" width="250px" />`;
    howTo.style = `visibility: hidden;`;
  } else if (userChoise == "s") {
    player_choise_img.innerHTML = `<img src="./assets/imgs/scissors.png" width="300px" />`;
    howTo.style = `visibility: hidden;`;
  } else {
    howTo.style = `visibility: 1;`;
    return " ";
  }
  

  if (compChoise == "r") {
    comp_choise_img.innerHTML = `<img src="./assets/imgs/rock.png" width="300px" />`;
  } else if (compChoise == "p") {
    comp_choise_img.innerHTML = `<img src="./assets/imgs/paper.png" width="250px" />`;
  } else if (compChoise == "s") {
    comp_choise_img.innerHTML = `<img src="./assets/imgs/scissors.png" width="300px" />`;
  } else {
    comp_choise_img.style = "display :none;";
    return " ";
  }
  

  if (userChoise == "r" && compChoise == "s") {
    myScore++
    about_player.innerHTML = `<p class = "text-success">YOU WIN</p>`;
    about_comp.innerHTML = `<p class = "text-danger">LOSE</p>`;
    pNumber.innerText = myScore
  }
  else if (userChoise == "p" && compChoise == "r") {
    myScore++
    about_comp.innerHTML = `<p class = "text-danger">LOSE</p>`;
    about_player.innerHTML = `<p class = "text-success">YOU WIN</p>`; 
    pNumber.innerText = myScore
  }
  else if (userChoise == "s" && compChoise == "p") {
    myScore++
    about_comp.innerHTML = `<p class = "text-danger">LOSE</p>`;
    about_player.innerHTML = `<p class = "text-success">YOU WIN</p>`;
    pNumber.innerText = myScore
  }
  else if (userChoise == compChoise) {
    about_comp.innerHTML = `<p class = "text-light">DRAW</p>`;
    about_player.innerHTML = `<p class = "text-light">DRAW</p>`;
  }
  else {
    compScore++
    about_comp.innerHTML = `<p class = "text-success">WIN</p>`;
    about_player.innerHTML = `<p class = "text-danger">LOSE</p>`;
    cNumber.innerText = compScore
  }


  

});
