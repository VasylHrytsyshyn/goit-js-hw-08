import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);


player.on('timeupdate', throttle(saveСurrentVideoTime, 1000));

function saveСurrentVideoTime(e) {
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem('videoplayer-current-time', seconds)
    // seconds = the current playback position
    }).catch(function (error) {
        console.log(error)
    // an error occurred
    });
};

let localStorageTime = localStorage.getItem('videoplayer-current-time') ? localStorage.getItem('videoplayer-current-time') : 0;

player.setCurrentTime(localStorageTime).then(function (seconds) {
    seconds = localStorageTime;
    // seconds = the actual time that the player seeked to
}).catch(function (error) {
    console.log(error)
    // switch (error.name) {
    //     case 'RangeError':
    //         // the time was less than 0 or greater than the video’s duration
    //         break;

    //     default:
    //         // some other error occurred
    //         break;
    // }
});
