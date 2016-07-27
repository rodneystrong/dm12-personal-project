angular
  .module('daft')
  .controller('MainCtrl', function($scope, $stateParams, mainSrv, displaySrv) {
    $scope.test = 'lel';

    var id = $stateParams;
    if($stateParams) {
        mainSrv.getRecentProject(id);
    }
  });
