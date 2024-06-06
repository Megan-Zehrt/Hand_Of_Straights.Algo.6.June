// 846. Hand of Straights - Medium


// Alice has some numbers of cards and she wants to rearrange the cards into groups so that each
// group is of size groupSize and consists of groupSize consecutive cards.

// Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.









/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    
    if(hand.length % groupSize !== 0){
        return false
    }

    let hashTable = new Map()

    for(let i = 0; i < hand.length; i++){
        if(hashTable.has(hand[i])){
            hashTable.set(hand[i], hashTable.get(hand[i]) +1)
        }
        else{
            hashTable.set(hand[i], 1)
        }
    }

    let uniqueCards = Array.from(hashTable.keys()).sort((a, b) => a - b);

    for(let card of uniqueCards){
        while(hashTable.get(card) > 0){
            
            for (let i = 0; i < groupSize; i++) {
                let currentCard = card + i;
                if (hashTable.get(currentCard) > 0) {
                    hashTable.set(currentCard, hashTable.get(currentCard) - 1);
                } else {
                    // If we can't form a group, return false
                    return false;
                }
            }
        }
    }

    return true
};