'use strict';


class Timer {
    constructor() {
        this.seconds = 0;
        this.minutes = 0;
    }

    startTimer() {
        this.timerID = setInterval(() => {
            this.updateSec();
        }, 1000)
    }

    stopTimer() {
        clearInterval(this.timerID);
    }

    resetTimer() {
        this.seconds = 0;
        this.minutes = 0;
        clearInterval(this.timerID);
        this.displayTime();
    }

    updateSec() {
        this.seconds += 1;
        if (this.seconds > 59) {
            this.seconds = 0;
            this.updateMin();
        }
        this.displayTime();
    }

    updateMin() {
        this.minutes += 1;
    }

    displayTime() {
        const secStr = this.seconds > 9 ? this.seconds : '0' + this.seconds.toString();
        const minStr = this.minutes > 9 ? this.minutes : '0' + this.minutes.toString();
        const timeContainer = document.querySelector('.timer__container');
        timeContainer.textContent = `${minStr}:${secStr}`
    }
}

const timer = new Timer();


const startBtn = document.querySelector('.timer__btns__start');
const stopBtn = document.querySelector('.timer__btns__stop');
const resetBtn = document.querySelector('.timer__btns__reset');

startBtn.addEventListener('click', () => {
    timer.startTimer();
    startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
    timer.stopTimer();
    startBtn.disabled = false;
})

resetBtn.addEventListener('click', () => {
    timer.resetTimer();
    startBtn.disabled = false;
})