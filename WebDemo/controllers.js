
DemoApp.controller('homeController', ['$scope', '$angiviti', function ($scope, $angiviti) {
    $scope.startProc = $angiviti.start 

}]);

DemoApp.controller('startController', ['$scope', 'UserInfo', function ($scope,UserInfo) {
    $scope.finish1 = $angiviti.endTask
    $scope.next = $angiviti.next

    const x = $angiviti.currentTask()
    console.log(x)
    document.getElementById("fdyna").innerHTML += x

    $scope.$watch('Name', function (newVal, oldVal) {
        UserInfo.name = $scope.Name;
    });
    $scope.$watch('City', function (newVal, oldVal) {
        UserInfo.city = $scope.City;
    });
    $scope.$watch('CC', function (newVal, oldVal) {
        UserInfo.cc = $scope.CC;
    });

}]);

DemoApp.controller('secondTaskController', ['$scope', '$angiviti', 'UserInfo', 'productService', 'productChoose', function ($scope, $angiviti , UserInfo, productService, productChoose) {
    console.log(UserInfo)
    $scope.finish2 = $angiviti.endTask

    const x = $angiviti.currentTask()
    console.log(x)
    document.getElementById("fdyna").innerHTML += x

}]);

DemoApp.controller('endController', ['$scope', '$resource', '$routeParams', '$http', 'UserInfo', 'productChoose', function ($scope, $resource, $routeParams, $http, UserInfo, productChoose) {


}]);