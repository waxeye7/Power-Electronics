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



let item_one_switch = document.getElementById('item-one-switch');
let item_one_switch_white = document.getElementById('item-one-switch-white');

let item_two_switch = document.getElementById('item-two-switch');
let item_two_switch_white = document.getElementById('item-two-switch-white');

let item_three_switch = document.getElementById('item-three-switch');
let item_three_switch_white = document.getElementById('item-three-switch-white');


item_one_switch.onclick = item_one_toggle;
item_two_switch.onclick = item_two_toggle;
item_three_switch.onclick = item_three_toggle;

function item_one_toggle() {
    item_one_switch.classList.toggle("justify-end");
    item_one_switch.classList.toggle("justify-start");
    item_one_switch_white.classList.toggle("smaller-margin-right");
    item_one_switch_white.classList.toggle("smaller-margin-left");   
}

function item_two_toggle() {
    item_two_switch.classList.toggle("justify-start");
    item_two_switch.classList.toggle("justify-end");
    item_two_switch_white.classList.toggle("smaller-margin-left");
    item_two_switch_white.classList.toggle("smaller-margin-right");
}

function item_three_toggle() {
    item_three_switch.classList.toggle("justify-end");
    item_three_switch.classList.toggle("justify-start");
    item_three_switch_white.classList.toggle("smaller-margin-right");
    item_three_switch_white.classList.toggle("smaller-margin-left");
}