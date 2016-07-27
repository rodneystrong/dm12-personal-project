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
      //top left
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

      //bot left
      case 65:
      $('.a').toggleClass('touch');
      playSound(4);
      break;
      case 83:
      $('.s').toggleClass('touch');
      playSound(5);
      break;
      case 68:
      $('.d').toggleClass('touch');
      playSound(6);
      break;
      case 70:
      $('.f').toggleClass('touch');
      playSound(7);
      break;

      //top right
      case 89:
      $('.y').toggleClass('touch');
      playSound(8);
      break;
      case 85:
      $('.u').toggleClass('touch');
      playSound(9);
      break;
      case 73:
      $('.i').toggleClass('touch');
      playSound(10);
      break;
      case 79:
      $('.o').toggleClass('touch');
      playSound(11);
      break;
//89 85 73 79
      //bot right
      case 87:
      $('.w').toggleClass('touch');
      playSound(1);
      break;
      case 87:
      $('.w').toggleClass('touch');
      playSound(1);
      break;
      case 87:
      $('.w').toggleClass('touch');
      playSound(1);
      break;
      case 87:
      $('.w').toggleClass('touch');
      playSound(1);
      break;
    }
  });
  $('body').on('keyup', function(e) {
    switch(e.keyCode) {
      case 81:
      $('.q').toggleClass('touch');
      break;
      case 87:
      $('.w').toggleClass('touch');
      break;
      case 69:
      $('.e').toggleClass('touch');
      break;
      case 82:
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
  $('.sound')[item].volume = 0.2;
  $('.sound')[item].load();
  $('.sound')[item].play();
}
