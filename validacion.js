// scripts.js

// Menu Toggle for Mobile
document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.menu__list');
    const menuToggle = document.createElement('button');
    menuToggle.innerText = 'Menu';
    menuToggle.classList.add('menu__toggle');
    document.querySelector('.menu__header').appendChild(menuToggle);

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('menu__list--visible');
    });
});

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let valid = true;

    if (name === '') {
        alert('Please enter your name.');
        valid = false;
    }

    if (email === '') {
        alert('Please enter your email.');
        valid = false;
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        valid = false;
    }

    if (message === '') {
        alert('Please enter your message.');
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.[^<>()[\]\\.,;:\s@"]{2,}))$/i;
    return re.test(String(email).toLowerCase());
}
