//////////////////////////////////////////////////////////////////////////////////////INTRO/////////////////////////////////////////////////////////////////////////////////////


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

//////////////////////////////////////////////////////////////////////////////////////HTML TRANSITIONS/////////////////////////////////////////////////////////////////////////////////////

document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
  
      let href = this.getAttribute('href');
  
      // animate current page out of view
      document.querySelector('body').classList.add('fade-out');
  
      setTimeout(function() {
        // load new page
        window.location.href = href;
      }, 500); // delay to allow for animation
  
    });
  });