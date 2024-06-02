document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');
    const radioPlayer = document.getElementById('radio-player');

    playButton.addEventListener('click', function() {
        radioPlayer.play();
    });

    pauseButton.addEventListener('click', function() {
        radioPlayer.pause();
    });
});
