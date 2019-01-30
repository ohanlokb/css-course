let backdrop = document.querySelector('.backdrop');

let selectPlanButtons = document.querySelectorAll('.plan button');

let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

let modalNoButton = document.querySelector('.modal__action--negative');
let modal = document.querySelector('.modal');

let ctaButton = document.querySelector('.main-nav__item--cta');

for ( let i=0; i < selectPlanButtons.length; i++ ) {
    selectPlanButtons[i].addEventListener('click', function() {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

backdrop.addEventListener('click', function() {
    //mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if (modal) {
        modal.classList.remove('open');
    }    
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function () {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
});


ctaButton.addEventListener('animationstart', function(event) {
    console.log('Animation started:',event);
});

ctaButton.addEventListener('animationstart', function(event) {
    console.log('Animation started:',event);
});

ctaButton.addEventListener('animationiteration', function(event) {
    console.log('Animation iteration:',event);
});