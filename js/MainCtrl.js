angular
  .module('daft')
  .controller('MainCtrl', function($scope, $stateParams, mainSrv) {
    $scope.test = 'lel';

    //when the user clicks on ryu
    $(".ryu").on('mousedown', function() {
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

    function playHadouken () {
      $('.sound')[16].volume = 0.5;
      $('.sound')[16].load();
      $('.sound')[16].play();
    }

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
//how to get route working
//how to check if all keys
//have been pressed once to
//then trigger an addClass
