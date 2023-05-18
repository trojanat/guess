'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Corect Answer';
// document.querySelector('.number').textContent = 11;
// console.log(document.querySelector('.score').textContent = 18);
// document.querySelector('.guess').value = 23;
// document.querySelector('.check').addEventListener('click', function chk() {
//     val1 = console.log(document.querySelector('.guess').value)
// });


//secretNumber Generator...
let num = Number(Math.trunc(Math.random() * 10));
console.log(num, typeof num);
console.log(num, typeof num);
let score = 10;
document.querySelector('.number').textContent = num;

//Event handler for Again btn
path1: document.querySelector('.again').addEventListener('click', function () {
    score = 10;
    num = Number(Math.trunc(Math.random() * 10));
    console.log(num, typeof num);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = '10';
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('body').style.backgroundColor = 'greenYellow';
    document.querySelector('.number').style.backgroundColor = ' rgb(152, 157, 157)';

});

//EventListener to Check button..
document.querySelector('.check').addEventListener('click', function () {
    let val2 = Number(document.querySelector('.guess').value);
    console.log(val2, typeof val2);
    //When No Number input!
    if (score !== 0) {
        if (!val2) {
            document.querySelector('.message').textContent = '⛔ No Number Enterd';
        }
        else {
            //When Number is correct!
            if (val2 === num) {
                document.querySelector('.message').textContent = '🎉Corect Number';
                document.querySelector('body').style.backgroundColor = 'green';
                document.querySelector('.number').style.backgroundColor = 'green';

            }
            else {
                //When Number is too High!
                if (val2 > num) {
                    document.querySelector('.message').textContent = '📈Too High!';
                    score = score - 1;
                    document.querySelector('.score').textContent = score;
                }
                //When Number is too Low!
                if (val2 < num) {
                    document.querySelector('.message').textContent = '📉Too Low!';
                    score = score - 1;
                }
            }
        }

        document.querySelector('.score').textContent = score;
    }
    else
        document.querySelector('.number').textContent = "You Lose Play Again";
});


// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);
// for (let i = 0; i < btnsOpenModal.length; i++)
//     btnsOpenModal[i].addEventListener('click', function () {
//         console.log('Button Clicked');
//         modal.classList.remove('hiidden');
//         overlay.classList.remove('hiidden');
//     });