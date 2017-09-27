(function () {
  'use strict';

  angular
    .module('writing')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Compose',
      state: 'writing'
    });
  }
}());
