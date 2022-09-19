let indoor_button = document.getElementById('indoor-button');
let outdoor_button = document.getElementById('outdoor-button');

indoor_button.onclick = opacity_change_indoor;
outdoor_button.onclick = opacity_change_outdoor;

function opacity_change_outdoor() {
    indoor_button.classList.remove("background-opaque-strong");
    outdoor_button.classList.add("background-opaque-strong");
}

function opacity_change_indoor() {
    indoor_button.classList.add("background-opaque-strong");
    outdoor_button.classList.remove("background-opaque-strong");
}