var app = angular.module('myApp');

app.factory("vkFactory", function ($http) {
    var testReq = function (url) {
        $http({
            url: url,
            method: "GET"
        })
    };
    return {
        test: testReq
    }
})