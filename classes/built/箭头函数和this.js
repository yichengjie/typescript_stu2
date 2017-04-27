"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = exports.deck.createCardPicker();
var pickedCard = cardPicker();
console.info("card: " + pickedCard.card + " of " + pickedCard.suit);
