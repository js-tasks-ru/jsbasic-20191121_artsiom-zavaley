'use strict';

class Carousel {
  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: './assets/images/default-slide-img.jpg'
    }
  ];
  constructor(element) {
    this.el = element;

    this.main = document.createElement('div');
    this.main.setAttribute('id', 'mainCarousel');
    this.main.classList.add('main-carousel', 'carousel', 'slide');
    this.el.appendChild(this.main);

    this.indicatorsWrap = document.createElement('ol');
    this.indicatorsWrap.classList.add('carousel-indicators');
    for (let i = 0; i < 3; i++) {
      let indicator = document.createElement('li');
      indicator.setAttribute('data-target', '#mainCarousel');
      indicator.setAttribute('data-slide-to', i);
      indicator.classList.add('carousel-indicator');
      this.indicatorsWrap.appendChild(indicator);
    }
    this.main.appendChild(this.indicatorsWrap);

    this.mainInner = document.createElement('div');
    this.mainInner.classList.add('carousel-inner');
    this.main.appendChild(this.mainInner);
    this.createSlie();

    let buttonPrev = document.createElement('button');
    buttonPrev.classList.add('carousel-control-prev');
    buttonPrev.setAttribute('aria-hidden', true);
    let buttonPrevIcon = document.createElement('span');
    buttonPrevIcon.classList.add('carousel-control-prev-icon');
    buttonPrevIcon.setAttribute('aria-hidden', true);
    buttonPrev.appendChild(buttonPrevIcon);
    let buttonPrevContent = document.createElement('span');
    buttonPrevContent.classList.add('sr-only');
    buttonPrevContent.innerHTML = 'Previous';
    buttonPrev.appendChild(buttonPrevContent);
    this.main.appendChild(buttonPrev);

    let buttonNext = document.createElement('button');
    buttonNext.classList.add('carousel-control-next');
    buttonNext.setAttribute('aria-hidden', true);
    let buttonNextIcon = document.createElement('span');
    buttonNextIcon.classList.add('carousel-control-next-icon');
    buttonNextIcon.setAttribute('aria-hidden', true);
    buttonNext.appendChild(buttonNextIcon);
    let buttonNextContent = document.createElement('span');
    buttonNextContent.classList.add('sr-only');
    buttonNextContent.innerHTML = 'Next';
    buttonNext.appendChild(buttonNextContent);
    this.main.appendChild(buttonNext);
  }

  createSlie() {
    let item = document.createElement('div');
    item.classList.add('carousel-item', 'active');
    this.mainInner.appendChild(item);

    let img = document.createElement('img');
    img.setAttribute('src', 'assets/images/default-slide-img.jpg');
    img.setAttribute('alt', 'Activelide');
    item.appendChild(img);

    let container = document.createElement('div');
    container.classList.add('container');
    item.appendChild(container);

    let caption = document.createElement('div');
    caption.classList.add('carousel-caption');
    container.appendChild(caption);

    let heading = document.createElement('h3');
    heading.classList.add('h1');
    heading.innerHTML = 'BEST LAPTOP DEALS';
    caption.appendChild(heading);
    
    let div = document.createElement('div');
    caption.appendChild(div);

    let link = document.createElement('a');
    link.classList.add('btn');
    link.setAttribute('href', '#');
    link.setAttribute('role', 'button');
    link.innerHTML = 'View all DEALS';
    div.appendChild(link);

    let linkImg = document.createElement('img');
    linkImg.setAttribute('src', 'assets/icons/icon-angle-white.svg');
    linkImg.setAttribute('alt', '');
    linkImg.classList.add('ml-3');
    link.appendChild(linkImg);
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;
