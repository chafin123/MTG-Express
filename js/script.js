
const indexCardImage = document.querySelector(".myContainer");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let slideIndex = 1;
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
function getCardByApi(set = [],collecterNumber = []) {
    let tempArray = [];
    for(let i = 0;i < set.length; i++){
        fetch(`https://api.scryfall.com/cards/${set[i]}/${collecterNumber[i]}`)
        .then(response => response.json())
        .then((data) => {
            let cardData = data;
            console.log(cardData)
            let cardName = cardData.name.replace(/,/g,'').replace(/ /g,'');
            window[cardName] = new Card(cardName,cardData.mana_cost,cardData.image_uris.normal,cardData.typeLine,cardData.set,cardData.keywords,cardData.artist)
            let key = Object.values(window[cardName])
            tempArray.push( `
                <div class="myCarouselImage beforeDrop">
                <img src="${key[2]}" class="indexCardImage" 
                style="transform: rotate(${(Math.floor(Math.random() *21) - 10)}deg);">
                </div>
                `
                )
                indexCardImage.innerHTML = tempArray.join(" ");
            })
        }
}
getCardByApi(["dom","neo"],[199,266])
//cards
const muldrothaTheGravetide = new Card("Muldrotha, the Gravetide",["3","B","G","U"],"muldrotha-the-gravetide",["Legendary","Creature", "Elemntal","Avatar"],"Dominaria",[],"Jason Rainville")
const bosejiuWhoEndures = new Card("Boseiju, Who Endures",[" "],"boseiju-who-endures",["Legendary","Land"],"Neon Dynasty",["channel"], "Chris Ostrowski")
const brainFreeze = new Card("Brain Freeze",["1","B"],"brain-freeze",["instant"],"Vintage Masters",["storm"],"Tim Hilderbrandt")
const timeSpiral = new Card("Time Spiral",["4","B","B"],"time-spiral",["Sorcery"],"Urza's Saga",[],"Micheal Sutfin")
const mindsDesire = new Card("Mind's Desire",["4","B","B"],"minds-desire",["sorcery"],"Commander 2021", ["storm"],"Anthony Franciso")
let cardArray = [muldrothaTheGravetide, bosejiuWhoEndures,brainFreeze,timeSpiral,mindsDesire];

// showCards(cardArray)

    
setTimeout(function(){
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
        slides[i].classList.remove("current")
    }
    slides[slideIndex-1].style.zIndex = "1";
    slides[slideIndex-1].classList.add("current")
}
prevBtn.addEventListener("click", plusSlides(-1));
nextBtn.addEventListener("click", plusSlides(1)); 
}, 1000) 

// function showCards(cardList) {
//     let tempArray = [];

//     cardList.forEach(card => {
//         let key = Object.values(card)
//                 tempArray.push(   `
//                 <div class="myCarouselImage beforeDrop">
//                 <img src="./assests/images/${key[2]}.png" class="indexCardImage" 
//                 style="transform: rotate(${(Math.floor(Math.random() *21) - 10)}deg);">
//                 </div>
//                 `
//                 )
//             })
//             indexCardImage.innerHTML = tempArray.join(" ");
//             let cards = document.getElementsByClassName('myCarouselImage');
//             for(i = 0;i < cards.length; i++) {
//                 cards[i].classList.add("cardDropping")
//             }
// }           
// function priceGraph(currentCard) {
//     const ctx = document.getElementById('myChart');
//     const myChart = new Chart(ctx, {
//             type: 'line',
//             data: {
//                 labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//                 datasets: [{
//                     label: 'price of card',
//                     data: [12, 19, 3, 5, 2, 3],
//                     backgroundColor: [
//                         'rgba(255, 99, 132, 0.2)',
//                         'rgba(54, 162, 235, 0.2)',
//                         'rgba(255, 206, 86, 0.2)',
//                         'rgba(75, 192, 192, 0.2)',
//                         'rgba(153, 102, 255, 0.2)',
//                         'rgba(255, 159, 64, 0.2)'
//                     ],
//                     borderColor: [
//                         'rgba(255, 99, 132, 1)',
//                         'rgba(54, 162, 235, 1)',
//                         'rgba(255, 206, 86, 1)',
//                         'rgba(75, 192, 192, 1)',
//                         'rgba(153, 102, 255, 1)',
//                         'rgba(255, 159, 64, 1)'
//                     ],
//                     borderWidth: 1
//                 }]
//             },
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true
//                     }
//                 }
//             }
//         });
// }
function animation(card) {
    card.classList.add("cardDrop")
}
