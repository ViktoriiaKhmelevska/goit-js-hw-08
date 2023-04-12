import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const STORAGE_KEY = "videoplayer-current-time";

function secondTime (data) {
localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds))
};

const secondStop = JSON.parse(localStorage.getItem(STORAGE_KEY));

player.setCurrentTime(secondStop || 0) 

player.on('timeupdate', throttle(secondTime, 1000));