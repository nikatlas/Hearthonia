var app;
(function (window) {
    'use strict';
    app = angular.module("heartonia", ["restangular"]);
    app.config(function (RestangularProvider) {
        //set the base url for api calls on our RESTful services
        var newBaseUrl = "";
        newBaseUrl = "https://omgvamp-hearthstone-v1.p.mashape.com/";
        RestangularProvider.setBaseUrl(newBaseUrl);
        RestangularProvider.setDefaultHeaders({
            "X-Mashape-Key": "6sZ1LVZK5OmshCU4CTJRbibWFTQsp12KuhZjsnjlxIsM1KoIHh"
        });
        
        RestangularProvider.setResponseExtractor(function(response, operation) {
            if (operation === 'getList') {
                var r = [].concat( response );
                return r;
            }
        });
    });
    window.onload = function () {
    };
}(window));