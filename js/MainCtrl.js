angular
  .module('daft')
  .controller('MainCtrl', function($scope, $stateParams, mainSrv) {
    $scope.test = 'lel';

    //if keydown in q then display qPress

    // $('body').on('keydown', function(e) {
    //     //console.log(e.which);
    //     switch(e.which) {
    //       //top left
    //       case 81:
    //       $scope.qPress = "work it";
    //       break;
    //       case 87:
    //       $scope.wPress = "make it";
    //     }
    //   });

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
