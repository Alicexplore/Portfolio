let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo-header')
let logoSpan = document.querySelectorAll('.logo')

window.addEventListener('DOMContentLoaded', () => {
    
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
            }, (idx + 1) * 50)
        });
    },2000)

    setTimeout(() => {
        intro.style.top = '-100vh';
    },2300)

    })  
});

//////////////////////////////////////////////////////////////////////////////////////POP UP ON IMAGE/////////////////////////////////////////////////////////////////////////////////////





// window pop up
// window.addEventListener("load", function(){
//     setTimeout(
//         function open(event){
//             document.querySelector(".popup").style.display = "block";
//         },
//         3800
//     )
//   });
//   document.querySelector("#close").addEventListener("click", function(){
//     document.querySelector(".popup").style.display = "none";
//   });


