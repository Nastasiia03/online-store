import axios from 'axios';

const cardsList = document.querySelector(".cards");

async function getCards(page = 1) {
    try {
        const response = await axios.get(`https://voodoo-sandbox.myshopify.com/products.json?limit=24&page=${page}`);
        console.log(response.data)
        
        cardsList.insertAdjacentHTML("beforeend", markupCards(response.data));
    } catch (error) {
        console.log(error);
    };
};
  
getCards();

function markupCards(cards) {
    return cards.products.map(({ title, images }) =>
images.map((image) => `
        <div>
          <img src="${image.src}" alt="product-image" loading="lazy" width="300" height="300"/>
          <div class="info">
            <p class="info-item">
              ${title}
            </p>
          </div>
          <button>ADD TO CART</button>
        </div>
      `).join('')
    )
};