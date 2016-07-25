$(document).ready(function() {
  $('h1').on('click', function() {
    playSound();
  })
});

function playSound() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
