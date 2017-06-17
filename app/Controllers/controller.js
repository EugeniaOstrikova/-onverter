var app = angular.module('myApp');

app.controller("vkController", function($scope, $http, vkFactory, vkService){
    // $scope.place = "";
    $scope.cur = {};
    $scope.getFriends = function () {
        var url = vkService.stUrl + "Rates?Periodicity=0 ";
        // url = url.replace("{1}", $scope.place);
        $http({
            url: url,
            method: "GET"
        })
            .then(function success(response) {
                $scope.data = response.data;
                console.log("код ответа" + response.status)

            },
            function error(response) {
                console.log("код ответа" + response.status)
            })
    };
    $scope.$watch('cur', function(newVal) {
        debugger;
    })
    // $scope.calc = function () {
    //     $scope.
    // }
});
