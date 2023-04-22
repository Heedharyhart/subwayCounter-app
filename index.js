let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let incrementBtn = document.getElementById("btn-increment");
let saveBtn = document.getElementById("btn-save")

let count = 0;

function incrementCount() {
  count += 1
  countEl.textContent = count;

}

function saveCount() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;

  countEl.textContent = 0;
  count = 0;


}