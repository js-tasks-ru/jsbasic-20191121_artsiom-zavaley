class ProductList {
  productsUrl = '/assets/data/products.json';
  productsStoreKey = 'cart-products';

  constructor(element) {
    this.el = element;
  }

  async show() {
    const url = this.productsUrl;
    const data = await new Promise(function (resolve) {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data));
    });
    this.render(data);
    this.localStorage(data);
  }

  render(data) {
    const basisComponent = `
      <div class="row justify-content-end">
        <div class="col-lg-9">
          <h3 class="section-title">Top Recommendations for You</h3>
          <div class="row homepage-cards">
          </div>
        </div>
      </div>
    `;
    this.el.innerHTML = basisComponent;
    this.createCard(data);
  }

  createCard(data) {
    const wrap = this.el.querySelector('.homepage-cards');    

    let cardsLayout = [];
    data.forEach(cardData => {
      const {id, title, imageUrl, rating, price, oldPrice} = cardData;

      let ratingStars = '';
      let ratingReviewAmount = '';
      if (rating === null) {
        ratingStars = this.getRating(rating);
        this.getreviewsAmount(rating);
      } else {
        ratingStars = this.getRating(rating.stars);
        ratingReviewAmount = this.getreviewsAmount(rating.reviewsAmount);
      }

      let oldPriceLayout = this.getOldPrice(oldPrice);

      cardsLayout.unshift(this.renderCard(id, title, imageUrl, ratingStars, ratingReviewAmount, price, oldPriceLayout));
    });
    wrap.innerHTML = cardsLayout.join('');
  }

  renderCard(...data) {
    let [id, title, imageUrl, ratingStars, ratingReviewAmount, price, oldPriceLayout] = data;
    const card = `
      <div data-product-id="${id}" class="products-list-product col-md-6 col-lg-4 mb-4">
        <div class="card">
          <div class="card-img-wrap">
            <img class="card-img-top" src="https://iliakan.github.io/course-project${imageUrl}" alt="Card image cap">
          </div>
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <div class="rate">
              ${ratingStars}
              ${ratingReviewAmount}
            </div>
            <p class="card-text price-text discount">
              <strong>${price}</strong>
              ${oldPriceLayout}
            </p>
            
            <button class="product-add-to-cart" data-button-role="add-to-cart">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    `;
    return card;
  }

  getRating(stars) {
    const star = `<i class="icon-star"></i>`;
    const activeStar = `<i class="icon-star active"></i>`;
    const checkedStar = `<i class="icon-star checked"></i>`;
    let rating = '';

    for (let i = 0; i < 5; i++) {
      if (stars === 0) {
        rating += activeStar;
      } else if (stars === null) {
        rating += star;
      } else {
        stars -= 1;
        rating += checkedStar;
      }
    }
    return rating;
  }

  getreviewsAmount(amount) {
    if (amount === null) {
      return;
    }
    let review = `<span class="rate-amount ml-2">${amount}</span>`;
    return review;
  }

  getOldPrice(price) {
    if (price === null) {
      return '';
    }
    let oldPrice = `<small class="ml-2">${price}</small>`;
    return oldPrice;
  }

  localStorage(data) {
    const wrap = this.el.querySelector('.homepage-cards');    
    let cartList = [];
    wrap.addEventListener('click', event => {
      let target = event.target;
      if (!target.hasAttribute('data-button-role')) {
        return;
      }

      let check = confirm('Вы уверенны, что хотите добавить этот товар в корзину?');

      if (check) {
        let id = target.closest('.products-list-product').dataset.productId;
        
        let cartItem = undefined;
        
        if (localStorage.getItem('cart-products') != null) {
          cartItem = cartList.find(item => item.id == id);
        }
        if (cartItem == undefined) {
          cartList.push(data[id - 1]);
          localStorage.setItem('cart-products', JSON.stringify(cartList));
        }
      }
    });
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;
