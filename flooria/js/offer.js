import offerData from "../helpers/offerData.js";


function createCard(cardEl) {
    return(`
        <div class = "card__item">
            <div class = "offer__card">
                <a class = "card__top" href = ${cardEl.link}>
                    <img src = ${cardEl.img} alt = ${cardEl.alt}/>
                </a>
                <div class = "card__bottom">
                    <div class = "card__bottom__left">
                        <h5>
                            <a href = ${cardEl.link}>${cardEl.title}</a>
                        </h5>
                    </div>
                    <div class = "card__bottom__right">
                        <div class = "arrow__action"> 
                        </div>  
                        <div class = "arrow__action__pointer">
                            &#9654;
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `)
}



function renderLst () {
    const offerList = document.getElementById('offer__list');
    offerList.innerHTML = offerData.map(offer => createCard(offer)).join('')
}

renderLst()