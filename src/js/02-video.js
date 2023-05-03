import Vimeo from '@vimeo/playe';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function (data) {
  console.log(data);
});
