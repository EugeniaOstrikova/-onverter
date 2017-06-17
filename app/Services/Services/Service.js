var app = angular.module('myApp');

app.service("vkService", function () {
    var startUrl = "http://www.nbrb.by/API/ExRates/";
    return{
        stUrl : startUrl
    }
})