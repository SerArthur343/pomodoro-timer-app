// PROJE PRATİĞİ 20 --- POMODORO TIMER APP V1





const screen = document.querySelector(".screen");

const stopButton = document.querySelector(".stopButton");
const startButton = document.querySelector(".startButton");
const resetButton = document.querySelector(".resetButton");
const message = document.querySelector(".message");

let timer;
let breakMode = false;
let remTime = 25 * 60;



stopButton.addEventListener("click", stop);
startButton.addEventListener("click", start);
resetButton.addEventListener("click", reset);



function stop() {

    clearInterval(timer);
    message.textContent = "Don't Stop!";     
}



function start() {

    clearInterval(timer);
    message.textContent = breakMode ? "Break Time!" : "Stay Focused!";

    timer = setInterval(() => {

        let minute = Math.floor(remTime / 60);
        let second = remTime % 60;
        screen.textContent = `${minute.toString().padStart(2, "0")}:${second.toString().padStart(2,"0")}`;

        if (remTime === 0) {

            clearInterval(timer);
            breakMode = !breakMode;
            remTime = breakMode ? 5 * 60 : 25 * 60;
            start();
        }

        else {
            remTime--;
        }

    }, 1000);
}



function reset() {

    clearInterval(timer);
    breakMode = false;
    remTime = 25 * 60;
    screen.textContent = "25:00";
    message.textContent = "Start Working!";
}

