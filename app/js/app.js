var app;
(function (window) {
    'use strict';
    app = angular.module("heartonia", ["restangular", 'infinite-scroll']);
    app.config(function (RestangularProvider) {
        //set the base url for api calls on our RESTful services
        var newBaseUrl = "";
        newBaseUrl = "https://omgvamp-hearthstone-v1.p.mashape.com/";
        RestangularProvider.setBaseUrl(newBaseUrl);
        RestangularProvider.setDefaultHeaders({
            "X-Mashape-Key": "6sZ1LVZK5OmshCU4CTJRbibWFTQsp12KuhZjsnjlxIsM1KoIHh"
        });
        
        RestangularProvider.setResponseExtractor(function (response, operation) {
            if (operation === 'getList') {
                var r = [].concat(response);
                return r;
            }
        });
    }).filter('equals', function() {
        return function(array, field, search) {
            if(!search)return array;
            var matches = [];
            for(var i = 0; i < array.length; i++) {
                if( array[i][field] == undefined ){
                    if( search.length == 0 ){
                        matches.push(array[i]);   
                    }
                }
                else if (array[i][field].toString() === search.toString() &&
                    search.length <= array[i][field].toString().length) {
                    matches.push(array[i]);
                }
            }
            return matches;
        };
    });
    window.onload = function () {
    };
}(window));