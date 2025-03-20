const audio = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause');
const seekbar = document.getElementById('seekbar');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');
const volumeControl = document.getElementById('volume');

let isPlaying = false;

// Play/Pause
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

// Update Seekbar
audio.addEventListener('timeupdate', () => {
    seekbar.value = (audio.currentTime / audio.duration) * 100;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

// Seekbar Change
seekbar.addEventListener('input', () => {
    audio.currentTime = (seekbar.value / 100) * audio.duration;
});

// Volume Control
volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

// Display Duration
audio.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(audio.duration);
});

// Format Time
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
}
