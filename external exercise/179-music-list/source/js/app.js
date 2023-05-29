const playIcons = document.querySelectorAll('.fa-play');
const audioTags = document.querySelectorAll('audio');
playIcons.forEach(function (playIcon) {
    playIcon.addEventListener('click', function (event) {
        let audioTarget = event.target.dataset.name;
        audioTags.forEach(function (audios) {
            if (audios.dataset.name === audioTarget) {
                audios.currentTime = 0;
                audios.play();
            } else {
                audios.pause();
            }
        })
    })
})