import '../styles/style.css';

document.addEventListener('DOMContentLoaded', e => {
    const loadButton = document.getElementById('load-button');
    const menuButton = document.getElementById('navbar');
    loadButton.addEventListener('click', e => import (/* webpackChunkName: "load" */ './app.js')
    .then(module => {
        loadButton.remove();
        menuButton.style.opacity = 1;
    }));
})

// loadButton.remove();