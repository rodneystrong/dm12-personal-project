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
      $('.w').toggleClass('touch');
      playSound2();
    }
    if(e.keyCode == 69) {
      $('.e').toggleClass('touch');
      playSound3();
    }
    if(e.keyCode == 82) {
      $('.r').toggleClass('touch');
      playSound4();
    }
    switch(e.keyCode) {
      
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
