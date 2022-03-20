
cardImage = document.querySelector(".myCardPageImageContainer")
tagContainer = document.querySelector(".myCardPageTagContainer")
class Card {
    constructor(cardName,cardCost = [], cardImage,typeLine = [], cardSet, cardKeywords = [],cardIllustrator,cmc) {
        this.cardName = cardName,
        this.cardCost = cardCost,
        this.cardImage = cardImage,
        this.typeLine = typeLine,
        this.cardSet = cardSet,
        this.cardKeywords = cardKeywords,
        this.cardIllustrator - cardIllustrator,
        this.cmc = cmc
    }
}
function getCardByApi(set,collecterNumber) {
    let tempImgArray = [];
    let tempTagArray = [];
        fetch(`https://api.scryfall.com/cards/${set}/${collecterNumber}`)
        .then(response => response.json())
        .then((data) => {
            let cardData = data;
            let cardName = cardData.name.replace(/,/g,'').replace(/ /g,'').replace(/'/g,'');
            window[cardName] = new Card(cardName,cardData.mana_cost,cardData.image_uris.normal,cardData.type_line,cardData.set,cardData.keywords,cardData.artist,cardData.cmc)
            let key = Object.values(window[cardName])
            tempImgArray.push( `
                <div class="myImage" id="${key[0].toLowerCase()}">
                <img src="${key[2]}" class="indexCardImage">
                </div>
                `
                )

                cardImage.innerHTML = tempImgArray.join(" ");
                let cmcArray = Array.from(key[1].replace(/{/g,'').replace(/}/g,''));
                let typelineArray = Array.from(key[3])
                console.log(typelineArray)
                tempTagArray.push(`
                <button href="#" class="btn badge rounded-pill bg-secondary cmc">${key[6]}</button>
                ${cmcArray.map((tag) => {
                    return `
                    <button class="btn badge rounded-pill manaCost" id="${tag}">
                    ${tag}
                    </button>`
                }).join(" ")}
                <button class="btn badge rounded-pill type">${key[3]}</button>
                `
            )
                tagContainer.innerHTML = tempTagArray.join(" ")
            })
            .finally(function () {
                callPriceGraph()
            })
    }
    getCardByApi("dom",199)

    let muldrothathegravetide = [6.02,6.08,6.09,6.43,7.36,6.49];
    let brainfreeze = [5.08,5.22,5.12,5.63,5.72,5.42];
    let mindsdesire = [0.22,0.20,0.20,0.21,0.21,0.20];
    let boseijuwhoendures = [27.80,27.80,27.80,27.80,35.94,25.69];
    let timespiral = [200.41,191.20,176.44,175.08,174.61,169.41];
    function callPriceGraph() {
        cardPricesName = ['muldrothathegravetide','brainfreeze','mindsdesire','boseijuwhoendures','timespiral']
        cardPrices = [muldrothathegravetide,brainfreeze,mindsdesire,boseijuwhoendures,timespiral];
        let elm = document.querySelector('.myImage');
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