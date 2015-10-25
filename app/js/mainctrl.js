(function (app) {
    'use strict';
    app.controller("mainCtrl", ["$scope", "hearthApi", function (scope, api) {
        scope.cards = [];
        api.getCards().then(function(c){
            scope.cards = c[0]["Basic"];
        });
        
        scope.refresh = function(){
            var filters = {};
            if( scope.mana != "" )filters["cost"] = scope.mana;
            if( scope.attack != "" )filters["attack"] = scope.attack;
            api.getCards(filters).then(function(c){
                scope.cards = c[0]["Basic"];
            });
        }
    }]);
}(app));