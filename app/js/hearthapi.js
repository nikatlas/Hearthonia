(function (app) {
    'use strict';
    app.service("hearthApi", ["Restangular", function (rest) {
        var res = {
            getCards: function (filter) {
                if( typeof filter == "undefined" )filter = {};
                filter["collectible"] = 1;
                var cards = rest.all("cards");//.then(function(r){console.log(r)});
                return cards.getList(filter);
            }
        };
        return res;
    }]);
}(app));