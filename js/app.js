$(document).ready(function() {
  $('.lcd').on('click', function() {
    playSound();
  });
  $('body').on('keydown', function(e) {
    console.log(e.keyCode);
    if(e.keyCode == 81) {
      $('.q').toggleClass('touch');
      playSound();
    }
    if(e.keyCode == 87) {
      playSound2();
    }
    if(e.keyCode == 69) {
      playSound3();
    }
    if(e.keyCode == 82) {
      playSound4();
    }
  });
  $('body').on('keyup', function(e) {
    if(e.keyCode == 81) {
      $('.q').toggleClass('touch');
      //playSound();
    }
  });
});

function playSound() {
  $('.sound')[0].volume = 0.5;
  $('.sound')[0].load();
  $('.sound')[0].play();
}

function playSound2() {
  $('.sound')[1].volume = 0.5;
  $('.sound')[1].load();
  $('.sound')[1].play();
}

function playSound3() {
  $('.sound')[2].volume = 0.5;
  $('.sound')[2].load();
  $('.sound')[2].play();
}

function playSound4() {
  $('.sound')[3].volume = 0.5;
  $('.sound')[3].load();
  $('.sound')[3].play();
}
