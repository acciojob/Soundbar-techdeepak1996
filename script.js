function playSound(soundName) {
    var audio = new Audio("sounds/" + soundName);
    audio.play();
}

function stopAllSounds() {
    var sounds = document.querySelectorAll("audio");
    sounds.forEach(function(sound) {
        sound.pause();
        sound.currentTime = 0;
    });
}
