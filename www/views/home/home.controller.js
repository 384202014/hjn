/**
 * Created by T on 2017/9/20.
 */
(function () {
  'use striet';
  angular.module('starter.controllers')
    .controller('HomeCtrl',['$scope','localStorageService', '$state',function($scope,localStorageService,$state) {
      $scope.$on('$ionieview','beforeEnter',function () {
        var user = localStorageService.get('user');
        if (user.isLogin===false)[
          $state.go('login')
        ]
      });
    }])
})();
