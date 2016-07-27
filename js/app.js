$(document).ready(function() {
  $('.lcd').on('click', function() {
    playSound();
  });
  $('body').on('keydown', function(e) {
    console.log(e.keyCode);
    // if(e.keyCode == 81) {
    //   $('.q').toggleClass('touch');
    //   playSound();
    // }
    switch(e.keyCode) {
      case 81:
      $('.q').toggleClass('touch');
      playSound(0);
      break;
      case 87:
      $('.w').toggleClass('touch');
      playSound(1);
      break;
      case 69:
      $('.e').toggleClass('touch');
      playSound(2);
      break;
      case 82:
      $('.r').toggleClass('touch');
      playSound(3);
      break;
    }
  });
  $('body').on('keyup', function(e) {
    if(e.keyCode == 81) {
      $('.q').toggleClass('touch');
    }
    if(e.keyCode == 87) {
      $('.w').toggleClass('touch');
    }
    if(e.keyCode == 69) {
      $('.e').toggleClass('touch');
    }
    if(e.keyCode == 82) {
      $('.r').toggleClass('touch');
    }
  });
});

/*
switch(expression) {
    case n:
        code block
        break;
    case n:
        code block
        break;
    default:
        default code block
}
*/

//put the event listener into switch statement that checks for keyCode
//then have it run the playsound fn that takes in a parameter of which
//sound array

function playSound(item) {
  $('.sound')[item].volume = 0.5;
  $('.sound')[item].load();
  $('.sound')[item].play();
}
