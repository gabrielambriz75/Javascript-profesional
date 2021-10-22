import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const button = document.querySelector("button");
const muteButton = document.querySelector("#un-mute");

const player = new MediaPlayer({
    el: video,
    plugins: [
        // new AutoPlay()
    ]
});

button.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();