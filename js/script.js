const indexCardImage = document.querySelector(".myContainer");

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
//cards
const muldrothaTheGravetide = new Card("Muldrotha, the Gravetide",["3","B","G","U"],"muldrotha-the-gravetide",["Legendary","Creature", "Elemntal","Avatar"],"Dominaria",[],"Jason Rainville")
const bosejiuWhoEndures = new Card("Boseiju, Who Endures",[" "],"boseiju-who-endures",["Legendary","Land"],"Neon Dynasty",["channel"], "Chris Ostrowski")
const brainFreeze = new Card("Brain Freeze",["1","B"],"brain-freeze",["instant"],"Vintage Masters",["storm"],"Tim Hilderbrandt")
const timeSpiral = new Card("Time Spiral",["4","B","B"],"time-spiral",["Sorcery"],"Urza's Saga",[],"Micheal Sutfin")
const mindsDesire = new Card("Mind's Desire",["4","B","B"],"minds-desire",["sorcery"],"Commander 2021", ["storm"],"Anthony Franciso")
let cardArray = [muldrothaTheGravetide, bosejiuWhoEndures,brainFreeze,timeSpiral,mindsDesire];
let slideIndex = 1;
showCards(cardArray)
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('myCarouselImage')
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.zIndex = "0";
    }
    slides[slideIndex-1].style.zIndex = "1";
}
function showCards(cardList) {
    let tempArray = [];

    cardList.forEach(card => {
        let key = Object.values(card)
        
            if(card == cardList[0]) {
                tempArray.push(   `
                <div class="myCarouselImage current">
                <img src="./assests/images/${key[2]}.png" class="indexCardImage d-block" 
                style="transform: rotate(${(Math.floor(Math.random() *21) - 10)}deg);">
                </div>
                
                `
                
                )}else
                tempArray.push( `
                <div class="myCarouselImage">
                <img src="./assests/images/${key[2]}.png" class="indexCardImage d-block" style="transform: rotate(${(Math.floor(Math.random() *21) - 10)}deg);">
                </div>
                
                `
                
                )
    })

    indexCardImage.innerHTML= tempArray.join(" ");
}
function animation(card) {
    card.classList.add("cardDrop")
}