(function () {
  'use striet';
  angular.module('starter.controllers').controller('CategoryListCtrl',['$scope','$ionicActionSheet',function ($scope,$ionicActionSheet) {
   $scope.categories=[
     {
       ID:1,
       Name:'电脑整机',
       Children:[
         {
           ID:11,
           Name:'笔记本'
         },
         {
           ID:12,
           Name:'台式机'
         },
         {
           ID:13,
           Name:'平板电脑'
         }
       ]
     },
     {
       ID:2,
       Name:'电脑配件',
       Children:[
         {
           ID:21,
           Name:'CPU'
         },
         {
           ID:22,
           Name:'电源'
         },
         {
           ID:23,
           Name:'显卡'
         }
       ]
     },
     {
       ID:3,
       Name:'平板电脑',
       Children:[
         {
           ID:31,
           Name:'显示器'
         },
         {
           ID:32,
           Name:'适配器'
         },
         {
           ID:33,
           Name:'xxx'
         }
       ]
     }

   ];
    $scope.activeCategory={};
    if ($scope.categories.length>0){
      $scope.activeCategory=$scope.categories[0];
    }
    $scope.selectCategory=function (index) {
      if ($scope.activeCategory.ID != $scope.categories[index].ID) {
        $scope.activeCategory = $scope.categories[index];
      }
    };
    $scope.showActiveSheet=function () {
      $ionicActionSheet.show({
        buttons:[
          {
            text:'<b>新增小分类</b>'
          },
          {
            text:'编辑分类'
          }
        ],
        cancelText:'取消',
        buttonClicked:function(index){
          switch (index){
            case 0:
                  $scope.gotoCategoryAdd();
                  break;
            case 1:
                  break;
          }
        },
        titleText:'更多操作'
      });
    };
    $scope.gotoCategoryAdd=function () {
      location.href='#/app/category-add/'+$scope.activeCategory.ID+'/'+$scope.activeCategory.Name;
    }
  }]);
})();
