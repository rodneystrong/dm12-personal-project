$(document).ready(function() {
  $('.lcd').on('click', function() {
    playSound();
  })
  $('body').on('keypress', function(e) {
    console.log(e.keyCode);
    if(e.keyCode == 101) {
      console.log(e.keyCode);
      playSound();
    }
  })
});

function playSound() {
  $('#hadouken-sound')[0].volume = 1;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
