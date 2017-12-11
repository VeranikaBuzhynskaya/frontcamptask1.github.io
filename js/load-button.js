document.addEventListener('DOMContentLoaded', e => {
    const loadButton = document.getElementsByClassName('load-button')[0];
    loadButton.addEventListener('click', e => import (/* webpackChunkName: "load" */ './app.js')
    .then(module => {
        console.log('Eeeeeeee');
        loadButton.remove();
    }));
})

// loadButton.remove();