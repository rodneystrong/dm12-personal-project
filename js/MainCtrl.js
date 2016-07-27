angular
  .module('daft')
  .controller('MainCtrl', function($scope, $stateParams, mainSrv) {
    $scope.test = 'lel';

    $scope.qPress = "Q";



    var id = $stateParams;
    if($stateParams) {
        mainSrv.getRecentProject(id);
    }
  });
//how to get route working
//how to check if all keys
//have been pressed once to
//then trigger an addClass
