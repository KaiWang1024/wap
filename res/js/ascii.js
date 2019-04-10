
var animating = false;
var timer = null;
var textArea;
var aniSelect;
var sizeSelect;
var turbo;
var speedRate = 250;
var startBtn;
var stopBtn;
var frame = 0;

window.onload = function() {
    textArea = document.getElementById('text-area');
    aniSelect = document.getElementById('animation');
    aniSelect.onchange = animationChanged;
    sizeSelect = document.getElementById('fontsize');
    sizeSelect.onchange = sizeChanged;
    turbo = document.getElementById('turbo');
    turbo.onchange = speedChanged;
    startBtn = document.getElementById('start');
    startBtn.onclick = startAnimate;
    stopBtn = document.getElementById('stop');
    stopBtn.onclick = stopAnimate;
    initText();
}

function toggleAnimation() {
    if (animating) {
        stopAnimate();
    } else {
        startAnimate();
    }
}

function startAnimate() {
    startBtn.disabled = 'disabled';
    stopBtn.disabled = '';
    animating = true;
    timer = setInterval(animationHandler, speedRate);
}

function stopAnimate() {
    startBtn.disabled = '';
    stopBtn.disabled = 'disabled';
    animating = false;
    clearInterval(timer);
    timer = null;
    frame = 0;
    initText();
}

function animationHandler() {
    const asciiArray = ANIMATIONS[aniSelect.value].split('=====');
    textArea.value = asciiArray[frame++];
    if (frame === asciiArray.length) {
        frame = 0;
    }
}

function animationChanged() {
    if (timer !== null) {
        toggleAnimation();
    }
    initText();
}

function sizeChanged() {
    switch(sizeSelect.value) {
        case 'Tiny': 
            textArea.style.fontSize = '7pt';
            break;
        case 'Small':
            textArea.style.fontSize = '10pt';
            break;
        case 'Medium':
            textArea.style.fontSize = '12pt';
            break;
        case 'Large':
            textArea.style.fontSize = '16pt';
            break;
        case 'Extra Large':
            textArea.style.fontSize = '24pt';
            break;
        case 'XXL':
            textArea.style.fontSize = '32pt';
            break;
    }
}

function speedChanged() {
    speedRate = turbo.checked ? 50 : 250;
    if (timer !== null) {
        clearInterval(timer);
        timer = setInterval(animationHandler, speedRate);
    }
}

function initText() {
    const texts = ANIMATIONS[aniSelect.value].split('=====');
    textArea.value = texts[0];
}