(function (app) {
    'use strict';
    app.controller("mainCtrl", ["$scope", "hearthApi", function (scope, api) {
        scope.cards = [];
        scope.limit = 21;
        
        api.getCards().then(function(c){
            scope.cards = [];
            var cards = [];
            for(var i in c[0])
                cards = cards.concat(c[0][i]);
            var scards = {};
            for(var i in cards){
                try{
                    scards[cards[i].cardId] = cards[i];
                }
                catch(e){}
            }
            for(var i in scards){
                scope.cards.push(scards[i]);
            }
            scope.limit = 21;               
        });
        scope.more = function(){
            scope.limit += 21;   
        }
        scope.refresh = function(){
            var filters = {};
            if( scope.mana != "" )filters["cost"] = scope.mana;
            if( scope.attack != "" )filters["attack"] = scope.attack;
            api.getCards(filters).then(function(c){
                var cards = [];
                for(var i in c[0])
                    cards = cards.concat(c[0][i]);
                for(var i in cards){
                   scope.cards[cards[i].cardId] = cards[i];
                }
            });
            scope.limit = 21;               
        }
    }]);
}(app));