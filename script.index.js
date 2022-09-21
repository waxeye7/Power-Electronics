let item_one_switch = document.getElementById('item-one-switch');
let item_one_switch_white = document.getElementById('item-one-switch-white');

let item_two_switch = document.getElementById('item-two-switch');
let item_two_switch_white = document.getElementById('item-two-switch-white');

let item_three_switch = document.getElementById('item-three-switch');
let item_three_switch_white = document.getElementById('item-three-switch-white');

let background_colour_item_one = document.getElementById('background-colour-item-one');
let background_colour_item_two = document.getElementById('background-colour-item-two');
let background_colour_item_three = document.getElementById('background-colour-item-three');

item_one_switch.onclick = item_one_toggle;
item_two_switch.onclick = item_two_toggle;
item_three_switch.onclick = item_three_toggle;

function item_one_toggle() {
    item_one_switch.classList.toggle("justify-end");
    item_one_switch.classList.toggle("justify-start");
    item_one_switch_white.classList.toggle("small-margin-right");
    item_one_switch_white.classList.toggle("small-margin-left");
    background_colour_item_one.classList.toggle("background-blue");
    background_colour_item_one.classList.toggle("green-circle-background");    

    item_one_switch.classList.toggle("animate__pulse");
}

function item_two_toggle() {
    item_two_switch.classList.toggle("justify-start");
    item_two_switch.classList.toggle("justify-end");
    item_two_switch_white.classList.toggle("small-margin-left");
    item_two_switch_white.classList.toggle("small-margin-right");
    background_colour_item_two.classList.toggle("background-blue");
    background_colour_item_two.classList.toggle("green-circle-background");

    item_two_switch.classList.toggle("animate__pulse");
}

function item_three_toggle() {
    item_three_switch.classList.toggle("justify-end");
    item_three_switch.classList.toggle("justify-start");
    item_three_switch_white.classList.toggle("small-margin-right");
    item_three_switch_white.classList.toggle("small-margin-left");
    background_colour_item_three.classList.toggle("background-blue");
    background_colour_item_three.classList.toggle("green-circle-background");

    
    item_three_switch.classList.toggle("animate__pulse");
}





let indoor_button = document.getElementById('indoor-button');
let outdoor_button = document.getElementById('outdoor-button');
let item_one = document.getElementById('item-one');
let item_two = document.getElementById('item-two');
let item_three = document.getElementById('item-three');

let item_one_image = document.getElementById('item-one-img');
let item_two_image = document.getElementById('item-two-img');
let item_three_image = document.getElementById('item-three-img');

indoor_button.onclick = opacity_change_indoor;
outdoor_button.onclick = opacity_change_outdoor;

function opacity_change_indoor() {
    indoor_button.classList.add("background-opaque-strong");
    outdoor_button.classList.remove("background-opaque-strong");
    item_one.innerHTML = "Living Room";
    item_two.innerHTML = "Living Room";
    item_three.innerHTML = "Living Room";
    item_one_image.src="./img/light.ico";
    item_two_image.src="./img/light.ico";
    item_three_image.src="./img/light.ico";
}

function opacity_change_outdoor() {
    indoor_button.classList.remove("background-opaque-strong");
    outdoor_button.classList.add("background-opaque-strong");
    item_one.innerHTML = "Garage Door";
    item_one_image.src="./img/garage.png";
    item_two.innerHTML = "Patio Light";
    item_two_image.src="./img/light.ico";
    item_three.innerHTML = "Spa";
    item_three_image.src="./img/spa.png";
}




let history = document.getElementById('history');
let to_show_history = document.getElementById('to-show-history');
let to_hide_history = document.getElementById('to-hide-history');
history.onclick = toggle_history;
function toggle_history(){
    to_show_history.classList.toggle("hidden");
    to_hide_history.classList.add("hidden");
}



let disarmed = document.getElementById('disarmed');
let disarmed_img = document.getElementById('disarmed-img');

let home = document.getElementById('home');
let home_img = document.getElementById('home-img');

let away = document.getElementById('away');
let away_img = document.getElementById('away-img');

let main_image = document.getElementById('main-image');

let armed_status = document.getElementById('armed-status');

let circle = document.getElementById('circle');

// main_image.onclick = toggle_disarmed;

disarmed_img.onclick = run_disarmed;
home_img.onclick = run_home;
away_img.onclick = run_away;

// function toggle_disarmed(){

// }


function run_disarmed(){
    disarmed_img.classList.replace("background-white", "background-red");
    disarmed.classList.remove("opacity-50");

    home_img.classList.replace("background-green", "background-white");
    home.classList.add("opacity-50");

    away_img.classList.replace("background-green", "background-white");
    away_img.classList.replace("background-green", "background-white");
    away.classList.add("opacity-50");

    main_image.src="./img/unlocked.png";

    armed_status.classList.add("red-text");
    armed_status.classList.remove("green-text");
    armed_status.innerHTML="Disarmed";

    circle.classList.remove("green-circle-background");
    circle.classList.add("red-circle-background")
}

function run_home(){
    home_img.classList.replace("background-white", "background-green");
    home.classList.remove("opacity-50");

    disarmed_img.classList.replace("background-red", "background-white");
    disarmed.classList.add("opacity-50");

    away_img.classList.replace("background-green", "background-white");
    away.classList.add("opacity-50");

    main_image.src="./img/homelocked.png";

    armed_status.innerHTML="Armed Home";
    armed_status.classList.remove("red-text");
    armed_status.classList.add("green-text");

    circle.classList.add("green-circle-background");
    circle.classList.remove("red-circle-background")
}

function run_away(){
    away_img.classList.replace("background-white", "background-green");
    away.classList.remove("opacity-50");

    disarmed_img.classList.replace("background-red", "background-white");
    disarmed.classList.add("opacity-50");

    home_img.classList.replace("background-green", "background-white");
    home.classList.add("opacity-50");

    main_image.src="./img/away.png";

    armed_status.classList.remove("red-text");
    armed_status.classList.add("green-text");
    armed_status.innerHTML="Armed Away";

    circle.classList.add("green-circle-background");
    circle.classList.remove("red-circle-background")
}