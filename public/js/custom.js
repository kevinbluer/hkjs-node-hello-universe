angular.module('resourceBrowserApp', [])
  .controller('ResourceBrowserController', function($scope, $http) {
    var resourceBrowser = this;

    resourceBrowser.loadResources = function() {
      $http({
        url: '/api/resources',
        method: 'GET'
      }).then(function(resources) {
        $scope.resources = resources.data;
      });
    };

  });