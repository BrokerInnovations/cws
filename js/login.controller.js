(function() {
    'use strict';

    angular
        .module('cls')
        .controller('LoginController', LoginController);

    //LoginController.$inject = ['$state'];

    /* @ngInject */
    function LoginController($state) {
        var vm = this;
        vm.login = login;

        function login() {
            var user = {
              email: vm.email,
              password: vm.password
            };
            console.log('login', user);
            $state.go('home');
        }
    }
})();
