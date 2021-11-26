"use strict";

// Get Element
let FullDivbtnINput = document.querySelector("#input-btn");
let StartBtn = document.querySelector("#Start-btn");
let StartInput = document.querySelector("#Start-input");
let ErrorMassege = document.querySelector("#Error");
let ProgressBar = document.querySelector("#div-container");
let MassegeRun = document.querySelector("#run");
let MassegeGood = document.querySelector("#good");
let SetNumberProgresBar = document.querySelector("#set-number");

StartBtn.addEventListener("click", function () {
  let ValueInputParsint = parseInt(StartInput.value);

  ErrorMassege.style.display = "none";
  ProgressBar.classList.remove("progreespar");
  FullDivbtnINput.style.display = "none";
  SetNumberProgresBar.textContent = ValueInputParsint;
  let Fullpersent = ValueInputParsint;
  // ProgressBar.style.display = 'block';
  MassegeGood.classList.add('good');
  MassegeRun.classList.remove('run');
  


  let lastpersent = "";
  ProgressBar.classList.remove("p100");
  ProgressBar.classList.remove("over50");
  setTimeout(() => {
    animation()
  }, 10);
  let Step = setInterval(() => {
    

    if (isNaN(ValueInputParsint)) {
      ErrorMassege.style.display = "block";
      ErrorMassege.textContent = "مقدار صحیح را وارد کنید";
      ProgressBar.classList.add("progreespar");
      return;
    }

    
    if (lastpersent) ProgressBar.classList.remove(lastpersent);

      ValueInputParsint -= 1;


    SetNumberProgresBar.textContent = ValueInputParsint;
    let time = Math.floor(
      ((Fullpersent - ValueInputParsint) / Fullpersent) * 100
    );

    lastpersent = `p${time}`;
    ProgressBar.classList.add(`p${time}`);
    
    if (time > 50) {
      ProgressBar.classList.add("over50");
    }

    if (ValueInputParsint <= 0) {
      clearInterval(Step);
    }
    
    if (lastpersent == 'p100') {
      // FullDivbtnINput.style.display = 'block';
      // ProgressBar.style.display = 'none';
      // MassegeGood.classList.remove('good');
      // MassegeRun.classList.add('run');
      animationdis()
    }


  }, 1000);
});


function animation() {
  ProgressBar.classList.add('progress-Styledis');
  MassegeRun.classList.add('run-stylerun');
}
function animationdis() {
  
    ProgressBar.classList.remove('progress-Styledis');
    MassegeRun.classList.remove('run-stylerun');
    setTimeout(() => {
      FullDivbtnINput.style.display = 'block';
      MassegeGood.classList.remove('good');
    }, 1500);
}
