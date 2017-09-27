(function () {
  'use strict';

  angular
    .module('writing.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('writing', {
        url: '/writing',
        templateUrl: '/modules/writing/client/views/writing.client.view.html',
        controller: 'WritingController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Perform Live Writing'
        }
      });
  }
}());
