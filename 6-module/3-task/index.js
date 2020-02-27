'use strict';

class Menu {
  template = `
  <ul class="list-group sidebar">
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cameraphotos">Camera &amp; Photo</a>
      <ul class="dropdown-menu">   
        
        <li data-id="cameraphotos_accessories" class="dropdown-item"><a>Accessories</a></li>
    
      </ul>
    </li>
  
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cinema">Home Cinema, TV &amp; Video</a>
      <ul class="dropdown-menu">   
        
        <li data-id="cinema_audio" class="dropdown-item"><a>Audio</a></li>
    
        <li data-id="cinema_video" class="dropdown-item"><a>Video</a></li>
    
      </ul>
    </li>
  </ul>
  `;

  constructor(element) {
    this.el = element;
    this.el.innerHTML = this.template;

    const mainItem = this.el.querySelectorAll('.dropdown');
    for (let item of mainItem) {
      item.addEventListener('pointerenter', this.dropdownHover.bind(this));
      item.addEventListener('pointerleave', this.dropdownOnHover.bind(this));
    }
    
    this.el.querySelector('.list-group').addEventListener('click', this.click.bind(this));
  }
  
  dropdownHover(event) {
    document.querySelector('.backdrop').classList.add('show');
    event.target.querySelector('.dropdown-menu').classList.add('show');
  }

  dropdownOnHover(event) {
    document.querySelector('.backdrop').classList.remove('show');
    event.target.querySelector('.dropdown-menu').classList.remove('show');
  }

  click(event) {
    if (event.target.closest('.dropdown-item')) {
      console.log(event.target.closest('.dropdown-item'));
      event.target.closest('.dropdown-item').dispathEvent(new CustomEvent('select', {
        detail: {
          id: event.target.dataset.id
        }
      }));
    } else {
      return;
    }
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Menu = Menu;