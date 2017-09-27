(function () {
  'use strict';

  angular
    .module('writing')
    .controller('WritingController', WritingController);

  WritingController.$inject = ['$scope', '$state', 'Authentication', 'Socket'];

  function WritingController($scope, $state, Authentication, Socket) {
    var vm = this;

    init();

  //  $scope.editor = CodeMirror.fromTextArea(document.getElementById("livetext"),options);
//    $scope.editor.setSize("96%", "98%");

    function init() {
      // If user is not signed in then redirect back home
  /*    if (!Authentication.user) {
        $state.go('home');
      }
*/
      // Make sure the Socket is connected
      if (!Socket.socket) {
        Socket.connect();
      }

      // Add an event listener to the 'writingMessage' event
      Socket.on('writingMessage', function (message) {
        vm.messages.unshift(message);
      });

      // Remove the event listener when the controller instance is destroyed
      $scope.$on('$destroy', function () {
        Socket.removeListener('writingMessage');
      });
    }

    // Create a controller method for sending messages
    function sendMessage() {
      // Create a new message object
      var message = {
        text: vm.messageText
      };

      // Emit a 'writingMessage' message event
      Socket.emit('writingMessage', message);

      // Clear the message text
      vm.messageText = '';
    }


  }
}());
