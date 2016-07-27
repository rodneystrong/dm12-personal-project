angular
  .module('daft')
  .service('mainSrv', function() {
    this.getRecentProject = function(id) {
      console.log('service');
      console.log(id);
    };
    $('body').on('keydown', function(e) {
        console.log(e.which);
        switch(e.which) {
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

          //bot right
          case 72:
          $('.h').toggleClass('touch');
          playSound(12);
          break;
          case 74:
          $('.j').toggleClass('touch');
          playSound(13);
          break;
          case 75:
          $('.k').toggleClass('touch');
          playSound(14);
          break;
          case 76:
          $('.l').toggleClass('touch');
          playSound(15);
        }
      });

      $('body').on('keyup', function(e) {
        switch(e.keyCode) {
          //top left
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
          break;

          //bot left
          case 65:
          $('.a').toggleClass('touch');
          break;
          case 83:
          $('.s').toggleClass('touch');
          break;
          case 68:
          $('.d').toggleClass('touch');
          break;
          case 70:
          $('.f').toggleClass('touch');
          break;

          //top right
          case 89:
          $('.y').toggleClass('touch');
          break;
          case 85:
          $('.u').toggleClass('touch');
          break;
          case 73:
          $('.i').toggleClass('touch');
          break;
          case 79:
          $('.o').toggleClass('touch');
          break;

          //bot right
          case 72:
          $('.h').toggleClass('touch');
          break;
          case 74:
          $('.j').toggleClass('touch');
          break;
          case 75:
          $('.k').toggleClass('touch');
          break;
          case 76:
          $('.l').toggleClass('touch');
        }
      });
      function playSound(item) {
        $('.sound')[item].volume = 0.2;
        $('.sound')[item].load();
        $('.sound')[item].play();
      }
  });
