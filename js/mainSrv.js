angular
  .module('daft')
  .service('mainSrv', function() {
    this.getRecentProject = function(id) {
      console.log('service');
      console.log(id);
    };

    var touched = [];
    //create an empty array
    //push a string representing each keystroke to the array
    //when a specific key is pressed
    //after each push always check if the array contains
    //either all the keypress items or a specific # of items.
    //when the array matches the specific condition then addClass
    //or toggleClass to make link visible.
//Battle page

        $('.ryu').on('mouseenter', function() {
    		$('.ryu-still').hide();
    		$('.ryu-ready').show();
      	})
      	.on('mouseleave', function() {
      		$('.ryu-ready').hide();
      		$('.ryu-still').show();
      	})
      	//when the user clicks on ryu
      	.on('mousedown', function() {
          console.log('lel');
      		playHadouken();
      		$('.ryu-ready').hide();
      		$('.ryu-throwing').show();
      		$('.hadouken').finish().show()
      			.animate({
      				'left': '300px'
      			},
      			500,
      			function() {
      				$(this).hide();
      				$(this).css('left', '-212px');
      			}
      			);
      	})
      	.on('mouseup', function() {
      		$('.ryu-throwing').hide();
      		$('.ryu-ready').show();
      		$('.hadouken').hide();
      	});
      	//the keyboard 'x' function for ryu-cool
      	$("body").on('keydown', function(e) {
      		if(e.which==88) {
            console.log(e.which);
      			$('.ryu-still').hide();
      			$('.ryu-ready').hide();
      			$('.ryu-cool').show();
      		}
      	})
      	//when the user lets go of the 'x' key
      	.on('keyup', function() {
      		$('.ryu-cool').hide();
      		$('.ryu-ready').show();
      	});

    $('body').on('keydown', function(e) {
        //console.log(e.which);
        switch(e.which) {
          //top left
          case 81:
          $('.q').toggleClass('touch');
          playSound(0);
          $('.stage-q').toggleClass('hide');
          break;
          case 87:
          $('.w').toggleClass('touch');
          playSound(1);
          $('.stage-w').toggleClass('hide');
          break;
          case 69:
          $('.e').toggleClass('touch');
          playSound(2);
          $('.stage-e').toggleClass('hide');
          break;
          case 82:
          $('.r').toggleClass('touch');
          playSound(3);
          $('.stage-r').toggleClass('hide');
          break;

          //bot left
          case 65:
          $('.a').toggleClass('touch');
          playSound(4);
          $('.stage-a').toggleClass('hide');
          break;
          case 83:
          $('.s').toggleClass('touch');
          playSound(5);
          $('.stage-s').toggleClass('hide');
          break;
          case 68:
          $('.d').toggleClass('touch');
          playSound(6);
          $('.stage-d').toggleClass('hide');
          break;
          case 70:
          $('.f').toggleClass('touch');
          playSound(7);
          $('.stage-f').toggleClass('hide');
          break;

          //top right
          case 89:
          $('.y').toggleClass('touch');
          playSound(8);
          $('.stage-y').toggleClass('hide');
          break;
          case 85:
          $('.u').toggleClass('touch');
          playSound(9);
          $('.stage-u').toggleClass('hide');
          break;
          case 73:
          $('.i').toggleClass('touch');
          playSound(10);
          $('.stage-i').toggleClass('hide');
          break;
          case 79:
          $('.o').toggleClass('touch');
          playSound(11);
          $('.stage-o').toggleClass('hide');
          break;

          //bot right
          case 72:
          $('.h').toggleClass('touch');
          playSound(12);
          $('.stage-h').toggleClass('hide');
          break;
          case 74:
          $('.j').toggleClass('touch');
          playSound(13);
          $('.stage-j').toggleClass('hide');
          break;
          case 75:
          $('.k').toggleClass('touch');
          playSound(14);
          $('.stage-k').toggleClass('hide');
          break;
          case 76:
          $('.l').toggleClass('touch');
          playSound(15);
          $('.stage-l').toggleClass('hide');
        }
      });

//KEY UP
      $('body').on('keyup', function(e) {
        switch(e.keyCode) {
          //top left
          case 81:
          $('.q').toggleClass('touch');
          $('.stage-q').toggleClass('hide');
          break;
          case 87:
          $('.w').toggleClass('touch');
          $('.stage-w').toggleClass('hide');
          break;
          case 69:
          $('.e').toggleClass('touch');
          $('.stage-e').toggleClass('hide');
          break;
          case 82:
          $('.r').toggleClass('touch');
          $('.stage-r').toggleClass('hide');
          break;

          //bot left
          case 65:
          $('.a').toggleClass('touch');
          $('.stage-a').toggleClass('hide');
          break;
          case 83:
          $('.s').toggleClass('touch');
          $('.stage-s').toggleClass('hide');
          break;
          case 68:
          $('.d').toggleClass('touch');
          $('.stage-d').toggleClass('hide');
          break;
          case 70:
          $('.f').toggleClass('touch');
          $('.stage-f').toggleClass('hide');
          break;

          //top right
          case 89:
          $('.y').toggleClass('touch');
          $('.stage-y').toggleClass('hide');
          break;
          case 85:
          $('.u').toggleClass('touch');
          $('.stage-u').toggleClass('hide');
          break;
          case 73:
          $('.i').toggleClass('touch');
          $('.stage-i').toggleClass('hide');
          break;
          case 79:
          $('.o').toggleClass('touch');
          $('.stage-o').toggleClass('hide');
          break;

          //bot right
          case 72:
          $('.h').toggleClass('touch');
          $('.stage-h').toggleClass('hide');
          break;
          case 74:
          $('.j').toggleClass('touch');
          $('.stage-j').toggleClass('hide');
          break;
          case 75:
          $('.k').toggleClass('touch');
          $('.stage-k').toggleClass('hide');
          break;
          case 76:
          $('.l').toggleClass('touch');
          $('.stage-l').toggleClass('hide');
        }
      });

      function playSound(item) {
        $('.sound')[item].volume = 0.2;
        $('.sound')[item].load();
        $('.sound')[item].play();
      }
      function playHadouken () {
        $('#hadouken-sound')[16].volume = 0.5;
        $('#hadouken-sound')[16].load();
        $('#hadouken-sound')[16].play();
      }
  });
