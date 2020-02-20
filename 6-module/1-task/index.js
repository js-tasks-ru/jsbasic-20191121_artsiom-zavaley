/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
class ClearedTable {
  constructor(data) {
    this.el = document.createElement("table");
    this.el.classList.add('pure-table');
    this.data = data;
    this.tHead = document.createElement("thead");
    this.trHead = document.createElement("tr");
    this.tBody = document.createElement("tbody");
    this.render();
  }

  thead() {
    this.tHead.appendChild(this.trHead);
    for (let key in this.data[0]) {
      if (key !== 'id') {
        let td = document.createElement('td');
        td.innerHTML = key[0].toUpperCase() + key.slice(1);
        this.trHead.appendChild(td);
      }
    }
    let td = document.createElement('td');
    this.trHead.appendChild(td);
    this.el.appendChild(this.tHead);
  }

  tbody() {
    this.data.forEach(item => {
      let trBody = document.createElement("tr");
      let currentId = "";
      for (let key in item) {
        if (key === 'id') {
          currentId = item[key];
          continue;
        }
        let tdBody = document.createElement("td");
        tdBody.innerHTML = item[key];
        trBody.appendChild(tdBody);  
      }
      let tdBody = document.createElement("td");
      let button = document.createElement('a');
      button.innerHTML = 'X';
      button.href = '#delete';
      button.setAttribute('data-delete-id', currentId);
      tdBody.appendChild(button);
      trBody.appendChild(tdBody);
      this.tBody.appendChild(trBody);

    });
    this.el.appendChild(this.tBody);
    this.el.addEventListener('click', event => this.deletion(event));
  }

  render() {
    this.thead();
    this.tbody();
  }

  deletion(event) {
    let target = event.target;
    if (target.hasAttribute('data-delete-id')) {
      let deletedId = +target.getAttribute('data-delete-id');
      let deletedItem = target.closest('tr');
      deletedItem.remove();
      this.onRemoved(deletedId);
    }
  }

  /**
   * Метод который выщывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {
    console.log(`Deleted item with id ${id}`);
  }
}

window.ClearedTable = ClearedTable;
