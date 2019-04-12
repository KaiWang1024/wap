var isPlaying = false;

$(function () {
    $('div#start').click(startGame);
    $('div#end').mouseover(endGame);
    $('div.boundary').mouseenter(loseGame);
    $('div#maze').mouseleave(loseGame);
});

function startGame() {
    $('h2#status').text('Click the "S" to begin.');
    $('div.boundary').removeClass('youlose')
    isPlaying = true;
}

function endGame() {
    if (isPlaying) {
        isPlaying = false;
        $('h2#status').text('You Win!');
    }
}

function loseGame() {
    if (isPlaying) {
        $('div.boundary').addClass('youlose');
        isPlaying = false;
        $('h2#status').text('You Lose!');
    }
}