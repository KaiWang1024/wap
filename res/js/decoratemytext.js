function alertHello() {
    alert("Hello, world!");
}

function bigFont() {
    document.getElementById('textArea').style.fontSize = '24pt';
}

function checkAlert() {
    alert("Checkbox value changed!");
}

function toggleBold() {
    let textArea = document.getElementById('textArea');
    textArea.className = textArea.className === '' ? 'bold-text' : '';
}

function toggleDecoration() {
    let textArea = document.getElementById('textArea');
    textArea.className = textArea.className === '' ? 'bling-decoration' : '';
    let bg = document.body.style.backgroundImage;
    bg = bg === '' ? 'url(res/img/decoratedtext/hundred-dollar-bill.jpg)' : '';
    document.body.style.backgroundImage = bg;
}

function largerFont() {
    let textArea = document.getElementById('textArea');
    const cssstyle = window.getComputedStyle(textArea);
    let fontSize = parseInt(cssstyle.fontSize);
    fontSize += 2;
    textArea.style.fontSize = fontSize + 'px';
}

var timer = null;
function increaseFont() {
    if (timer == null) {
        largerFont();
        timer = setInterval(largerFont, 500);
    } else {
        clearInterval(timer);
        timer = null;
    }
}

function piglatin() {
    let area = document.getElementById('textArea')
    let text = area.value;
    area.value = text.replace(/\b(\w)(\w+)\b/g, '$2$1ay');
}

function malkovich() {
    let area = document.getElementById('textArea')
    let text = area.value;
    area.value = text.replace(/[a-zA-Z0-9]{5,}/, 'Malkovitch');
}

window.onload = function () {
    document.getElementById('bigBtn').onclick = increaseFont;
    document.getElementById('checkbling').onchange = toggleDecoration;
    document.getElementById('piglatin').onclick = piglatin;
    document.getElementById('malkovitch').onclick = malkovich;
}