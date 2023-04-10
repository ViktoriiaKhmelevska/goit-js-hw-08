import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const STORAGE_KEY = "videoplayer-current-time";

function secondTime (data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds))
};
    player.on('timeupdate', throttle(secondTime, 1000));

       const secondStop = JSON.parse(localStorage.getItem(STORAGE_KEY));
player.setCurrentTime(secondStop).then(function (seconds) {
    if (!secondStop) {
        return;
    }
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});