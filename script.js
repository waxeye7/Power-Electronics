let disarmed = document.getElementById('disarmed');
let disarmed_img = document.getElementById('disarmed-img');

let home = document.getElementById('home');
let home_img = document.getElementById('home-img');

let away = document.getElementById('away');
let away_img = document.getElementById('away-img');

let main_image = document.getElementById('main-image');

let armed_status = document.getElementById('armed-status');

let circle = document.getElementById('circle');


disarmed_img.onclick = run_disarmed;
home.onclick = run_home;
away.onclick = run_away;

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