import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);


player.on('timeupdate', throttle(saveСurrentVideoTime, 1000));

// function saveСurrentVideoTime(e) {
//     localStorage.setItem('videoplayer-current-time', e.seconds)
// }; 

function saveСurrentVideoTime(e) {
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem('videoplayer-current-time', seconds)
    // seconds = the current playback position
    }).catch(function (error) {
        console.log(error)
    // an error occurred
    });
};
const localStorageTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(localStorageTime)

