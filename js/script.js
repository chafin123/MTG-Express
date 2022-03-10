const indexCardImage = document.querySelector(".cardImageContainer");

class Card {
    constructor(cardName,cardCost = [], cardImage,typeLine = [], cardSet, cardKeywords = [],cardIllustrator) {
        this.cardName = cardName,
        this.cardCost = cardCost,
        this.cardImage = cardImage,
        this.typeLine = typeLine,
        this.cardSet = cardSet,
        this.cardKeywords = cardKeywords
        this.cardIllustrator - cardIllustrator
    }
}

const muldrothaTheGravetide = new Card("Muldrotha, the Gravetide",["3","B","G","U"],"muldrotha-the-gravetide",["Legendary","Creature", "Elemntal","Avatar"],"Dominaria",[],"Jason Rainville")
const bosejiuWhoEndures = new Card("Boseiju, Who Endures",[" "],"boseiju-who-endures",["Legendary","Land"],"Neon Dynasty",["channel"], "Chris Ostrowski")

let cardArray = [muldrothaTheGravetide, bosejiuWhoEndures];
const indexCard = (cardList) => {
    let tempArray = [];
    cardList.forEach(card => {
        let key = Object.values(card)
        if(cardList[0]) {
            tempArray.push(

                `
                <div class="carousel-item active">
                <img src="./assests/images/${key[2]}.png" class="indexCardImage d-block" style="transform: rotate(${(Math.floor(Math.random() *21) - 10)}deg);">
                </div>
                
                `
                );
            } 
        if(!cardList[0]) {
            tempArray.push(
                `
                <div class="carousel-item">
                <img src="./assests/images/${key[2]}.png" class="indexCardImage d-block" style="transform: rotate(${(Math.floor(Math.random() *21) - 10)}deg);">
                </div>
                
                `
                );
        }
    });
    indexCardImage.innerHTML = tempArray;
};
indexCard(cardArray);