$(document).ready(function() {
  $('.lcd').on('click', function() {
    playSound();
  });
  $('body').on('keypress', function(e) {
    console.log(e.keyCode);
    if(e.keyCode == 113) {
      playSound();
    }
    if(e.keyCode == 119) {
      playSound2();
    }
  });
});

function playSound() {
  $('.sound')[0].volume = 1;
  $('.sound')[0].load();
  $('.sound')[0].play();
}

function playSound2() {
  $('.sound')[1].volume = 1;
  $('.sound')[1].load();
  $('.sound')[1].play();
}
