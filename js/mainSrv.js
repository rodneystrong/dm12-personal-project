angular
  .module('daft')
  .service('mainSrv', function() {
    this.getRecentProject = function(id) {
      console.log('service');
      console.log(id);
    };
    $('.lcd').on('click', function() {
        playSound(0);
      });
      function playSound(item) {
        $('.sound')[item].volume = 0.2;
        $('.sound')[item].load();
        $('.sound')[item].play();
      }
  });
