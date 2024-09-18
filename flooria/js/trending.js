import trendingData from "../helpers/trendingData.js";

trendingData.forEach(product => {
    const trendingList = document.getElementById('trending__list');

    const trendingItem = document.createElement('div');
    trendingItem.classList.add('trending__item');
    trendingItem.innerHTML = `
        <div class = "catd__top">
            <img src = "${product.img}"/>
            <div class = "button">add to card</div>
        </div>
        <div class = "catd__bottom">
            <h5>${product.title}</h5>
            
            <div class = "product__price">
                ${
                    `${product.discount > 0 ? 
                    `<div class = "full">${product.price}</div> 
                    <div class = "discount">${product.price - (product.price / 100 * product.discount)}</div>` :
                    `<div>${product.price}</div>`}`
                }
            </div>
        </div>
    `
    trendingList.appendChild(trendingItem);
})