'use strict';

const openModalOne = document.querySelector('.show-modal-1');
const openModalTwo = document.querySelector('.show-modal-2');
const openModalThree = document.querySelector('.show-modal-3');

const modalOne = document.querySelector('.modal-one');
const modalTwo = document.querySelector('.modal-two');
const modalThree = document.querySelector('.modal-three');

const closeModalOne = document.querySelector('.close-modal-one');
const closeModalTwo = document.querySelector('.close-modal-two');
const closeModalThree = document.querySelector('.close-modal-three');

const overlay1 = document.querySelector('.overlay-one');
const overlay2 = document.querySelector('.overlay-two');
const overlay3 = document.querySelector('.overlay-three');

var OnlyClick;
var CtrlClick;
var AltClick;

const openModalFirst = function(){
    modalOne.classList.remove('hidden');
    overlay1.classList.remove('hidden');
}

const closeModal1 = function(){
    modalOne.classList.add('hidden');
    overlay1.classList.add('hidden');
}

const openModalSecond = function(){
    modalTwo.classList.remove('hidden');
    overlay2.classList.remove('hidden');
}

const closeModal2 = function(){
    modalTwo.classList.add('hidden');
    overlay2.classList.add('hidden');
}

const openModalThird = function(){
    modalThree.classList.remove('hidden');
    overlay3.classList.remove('hidden');
}

const closeModal3 = function(){
    modalThree.classList.add('hidden');
    overlay3.classList.add('hidden');
}

const EscapeClose1 = function(){
    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
            closeModal1();
        }
    })
}

const EscapeClose2 = function(){
    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
            closeModal2();
        }
    })
}

const EscapeClose3 = function(){
    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
            closeModal3();
        }
    })
}

// openModalOne.addEventListener('click', openModalFirst);
// openModalTwo.addEventListener('click', openModalSecond);
// openModalThree.addEventListener('click', openModalThird);
// closeModalOne.addEventListener('click', closeModal1);
// closeModalTwo.addEventListener('click', closeModal2);
// closeModalThree.addEventListener('click', closeModal3);
// overlay1.addEventListener('click', closeModal1);
// overlay2.addEventListener('click', closeModal2);
// overlay3.addEventListener('click', closeModal3);
// EscapeClose2();

function isKeyPressed(event) {
    if (event.ctrlKey){
        OnlyClick = false;
        CtrlClick = true;
        AltClick = false;
        console.log('CtrlClick');
    } else if (event.altKey){
        OnlyClick = false;
        CtrlClick = false;
        AltClick = true;
        console.log('AltClick');
    } else{
        OnlyClick = true;
        CtrlClick = false;
        AltClick = false;
        console.log('OnlyClick');
    }
}

function click(){
    if(OnlyClick == true && CtrlClick == false && AltClick == false){
        console.log('click');
        openModalOne.addEventListener('click', openModalFirst);
        openModalTwo.addEventListener('click', openModalSecond);
        openModalThree.addEventListener('click', openModalThird);
        closeModalOne.addEventListener('click', closeModal1);
        closeModalTwo.addEventListener('click', closeModal2);
        closeModalThree.addEventListener('click', closeModal3);
        overlay1.addEventListener('click', closeModal1);
        overlay2.addEventListener('click', closeModal2);
        overlay3.addEventListener('click', closeModal3);
        EscapeClose2();
    } else if (OnlyClick === false && CtrlClick === true && AltClick === false){
        console.log('ctrl');
        openModalOne.addEventListener('click', openModalFirst);
        openModalTwo.addEventListener('click', openModalSecond);
        openModalThree.addEventListener('click', openModalThird);
        closeModalOne.addEventListener('click', closeModal1);
        closeModalTwo.addEventListener('click', closeModal2);
        closeModalThree.addEventListener('click', closeModal3);
        overlay1.addEventListener('click', closeModal1);
        overlay2.addEventListener('click', closeModal2);
        overlay3.addEventListener('click', closeModal3);
        EscapeClose1();
        EscapeClose2();
        EscapeClose3();
    }
}
click();