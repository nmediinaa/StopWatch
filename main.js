var sec = 0;
var min = 0;
var hrs = 0;
var mili = 0;

var function_timer;

function start() {
    console.log('start!');
    function_timer = setInterval(timer, 10);
}

function reset() {
    console.log('reset!');
    sec = 0;
    min = 0;
    hrs = 0;
    mili = 0;
    timer_text.innerText = '0' + hrs + ':' + '0' + min + ':' + '0' + sec + '.' + '0' + mili;
}

function stop() {
    console.log('stop!');
    clearInterval(function_timer);
}
const btn_start = document.querySelector('.btn_start');
const btn_reset = document.querySelector('.btn_reset');
const btn_stop = document.querySelector('.btn_stop');
const btn_lap = document.querySelector('.btn_lap');
const timer_text = document.querySelector('.timer_text');

btn_start.onclick = start;
btn_reset.onclick = reset;
btn_stop.onclick = stop;

function timer() {
    console.log("time running!");
    mili++;
    timer_text.innerText = hrs + ':' + min + ':' + sec + '.' + mili;
    if (mili == 100) {
        sec++;
        mili = 0;
    }
    if (sec == 60) {
        min++;
        sec = 0;
    }

    if (min == 60) {
        hrs++;
        min = 0;
    }
}
