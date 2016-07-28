angular
  .module('daft')
  .controller('MainCtrl', function($scope, $stateParams, mainSrv) {
    $scope.test = 'lel';

    var clicky = 0;
    function checkClicky() {
      if(clicky === 3) {
        $('.place-achieve').toggleClass('hide');
        $('.place-select').toggleClass('hide');
        console.log('clicky clicky');
        playSound(17);
      }
    }

    //when the user clicks on ryu
    $(".ryu").on('mousedown', function() {
      console.log('lel');
      playSound(16);
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
      clicky++;
      checkClicky();
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

    function playSound(item) {
      $('.sound')[item].volume = 0.5;
      $('.sound')[item].load();
      $('.sound')[item].play();
    }

    // function battleSound() {
    //   $('.sound')[16].volume = 0.5;
    //   $('.sound')[16].load();
    //   $('.sound')[16].play();
    // }

    //top left
    $scope.qPress = "work it";
    $scope.wPress = "make it";
    $scope.ePress = "do it";
    $scope.rPress = "makes us";

    //bot left
    $scope.aPress = "harder";
    $scope.sPress = "better";
    $scope.dPress = "faster";
    $scope.fPress = "stronger";

    //top right
    $scope.yPress = "more than";
    $scope.uPress = "ever";
    $scope.iPress = "hour";
    $scope.oPress = "after";

    //bot right
    $scope.hPress = "our";
    $scope.jPress = "work is";
    $scope.kPress = "never";
    $scope.lPress = "over";

    var id = $stateParams;
    if($stateParams) {
        mainSrv.getRecentProject(id);
    }
  });
