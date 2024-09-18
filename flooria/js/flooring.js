import flooringData from "../helpers/flooringData.js";

flooringData.forEach(product => {
    const flooringList = document.getElementById('flooring__list');

    const flooringItem = document.createElement('div');
    flooringItem.classList.add('flooring__item')

    flooringItem.innerHTML = `
        <img class = "product__img" src = "${product.img}"/>
        <div>
            <a href = "${product.slideLink}">
                <img class = "icon" src = "${product.icon}"/>
            </a>
            <h5>
                <a href = "${product.productPageLink}">
                    project #${product.id}
                </a>
            </h5>
        </div>
    `

    flooringList.appendChild(flooringItem)
})