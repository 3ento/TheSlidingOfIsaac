let sfx = document.getElementsByTagName("audio");

function playAudio() {
    x = sfx.item([Math.random() * 10]);
    x.play();

    setTimeout(function () { window.location = '../index.html' }, 1000)
}