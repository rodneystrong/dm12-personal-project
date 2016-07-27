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

    $scope.qPress = "work it";
    $scope.wPress = "make it";


    var id = $stateParams;
    if($stateParams) {
        mainSrv.getRecentProject(id);
    }
  });
//how to get route working
//how to check if all keys
//have been pressed once to
//then trigger an addClass
