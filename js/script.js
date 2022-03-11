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
    tempArray.push(`
    <div class="myCarouselContainer">
    `)
    cardList.forEach(card => {
        let key = Object.values(card)
        
            if(card == cardList[0]) {
                tempArray.push(   `
                <div class="myCarouselImage current">
                <img src="./assests/images/${key[2]}.png" class="indexCardImage d-block" style="transform: rotate(${(Math.floor(Math.random() *21) - 10)}deg);">
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
    tempArray.push(`
    <a class="prev" onclick="plusSlides(-1)">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
    </svg>
    </a>
    <a class="next" onclick="plusSlides(1)">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
    </svg>
    </a>
    </div>
    `)
    indexCardImage.innerHTML= tempArray.join(" ");
}