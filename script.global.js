let menu = document.getElementById('menu');
let to_show_menu = document.getElementById('to-show-menu');

let body = document.getElementById('body');

menu.onclick = menu_toggle;

function menu_toggle(){
    to_show_menu.classList.toggle("hidden");
    body.classList.toggle("light-light-layer");
}