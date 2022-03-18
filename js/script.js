
const indexCardImage = document.querySelector(".myContainer");
let cardArray = [];

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
    let tempImgArray = [];
    for(let i = 0;i < set.length; i++){
        fetch(`https://api.scryfall.com/cards/${set[i]}/${collecterNumber[i]}`)
        .then(response => response.json())
        .then((data) => {
            let cardData = data;
            let cardName = cardData.name.replace(/,/g,'').replace(/ /g,'').replace(/'/g,'');
            window[cardName] = new Card(cardName,cardData.mana_cost,cardData.image_uris.normal,cardData.typeLine,cardData.set,cardData.keywords,cardData.artist)
            let key = Object.values(window[cardName])
            cardArray.push(cardName.toLowerCase())
            tempImgArray.push( `
                <div class="myCarouselImage beforeDrop" id="${key[0].toLowerCase()}">
                <a href="./cardpage.html">
                <img src="${key[2]}" class="indexCardImage"
                style="transform:rotate(${(Math.floor(Math.random() *21) - 10)}deg);">
                </a>
                </div>
                `
                )
                indexCardImage.innerHTML = tempImgArray.join(" ");
            })
           .finally(function() {
                encompassingSlide();
           })
 
        }

    }
getCardByApi(["dom","neo","c21","scg","usg"],[199,266,123,29,103])

function encompassingSlide() {
    showSlides(slideIndex)

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
    slides[slideIndex-1].classList.add("current");
    callPriceGraph();
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function minusSlides() {
    showSlides(slideIndex --);
}
let muldrothathegravetide = [6.02,6.08,6.09,6.43,7.36,6.49];
let brainfreeze = [5.08,5.22,5.12,5.63,5.72,5.42];
let mindsdesire = [0.22,0.20,0.20,0.21,0.21,0.20];
let boseijuwhoendures = [27.80,27.80,27.80,27.80,35.94,25.69];
let timespiral = [200.41,191.20,176.44,175.08,174.61,169.41];
function callPriceGraph() {
    cardPricesName = ['muldrothathegravetide','brainfreeze','mindsdesire','boseijuwhoendures','timespiral']
    cardPrices = [muldrothathegravetide,brainfreeze,mindsdesire,boseijuwhoendures,timespiral];
    let elm = document.querySelector('.current');
    let priceArrayName = elm.id;
    let priceArrayIndex = cardPricesName.indexOf(priceArrayName)
    priceGraph(cardPrices[priceArrayIndex])
}
function priceGraph(priceArray) {
    
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['10/21', '11/21', '12/21', '01/22', '02/22', '03/22'],
                datasets: [{
                    label: 'Card Price',
                    data: priceArray,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                tooltips: {
                    callbacks: {
                        label: function(tooltipItems) {
                            return "$" + tooltipItems.yLabel.toString();
                        }
                    }
                },
                scales: {
                    yAxes: [{
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toFixed(2)
                               }
                        }
                        
                    }]
                }
            }
        });
}
function animation(card) {
    card.classList.add("cardDrop")
}
