'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
var onlyCloseBtnClick = false;
var overlayClick = false;
var ctrlClick = false;
var altClick = false;
var EscapeClick = false;

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', onlyClickonClose);
overlay.addEventListener('click', overlayClose);

document.addEventListener("keydown", EscapeBtn);

for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', function (e) {
    openModal();
    click(e);
    });
}

function click(e) {
    if(e.ctrlKey){
        onlyCloseBtnClick = true;
        overlayClick = true;
        EscapeClick = true;    
    }
    else if(e.altKey){
        onlyCloseBtnClick = true;
        overlayClick = false;
        EscapeClick = false;
    }
    else{
        onlyCloseBtnClick = true;
        EscapeClick = false;
        overlayClick = true;
    }    
}

function onlyClickonClose(){
    if(onlyCloseBtnClick){
        closeModal();
    }
}

function overlayClose(){
    if(overlayClick){
        closeModal();
    }
}

function EscapeClose(){
    if(EscapeClick){
        closeModal();
    }
}

function EscapeBtn(e) {
    if (e.which == "27"){
        EscapeClose();
    }
}
