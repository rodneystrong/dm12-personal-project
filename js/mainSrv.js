angular
  .module('daft')
  .service('mainSrv', function() {
    this.getRecentProject = function(id) {
      console.log('service');
      console.log(id);
    };
  });
