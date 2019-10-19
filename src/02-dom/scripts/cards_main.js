import functionsCards from "./cards.js";

let btnAddCard = document.getElementById("btn-top-add");
let btnDel = document.getElementById("btn-del");
/*
add event listeners below
*/
btnAddCard.addEventListener("click", functionsCards.onAddCardClicked);
btnDel.addEventListener("click", functionsCards.onDelBtnClicked);
