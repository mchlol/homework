let toggleMenuBtn = document.querySelector('#toggle-menu');
let navMenu = document.querySelector('.nav-menu');

function dropdown(btn,menu) {
    // where btn is the trigger and menu is the thing that drops down

    btn.addEventListener('click', function() {
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
        } else {
        menu.classList.add('hidden');
        };
    })
}

dropdown(toggleMenuBtn,navMenu);