/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
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
function SortableTable(items) {
  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');
  this.el.classList.add('table');

  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */


  let thead = document.createElement('thead');
  let trhead = document.createElement('tr');
  trhead.classList.add('table__row_head');
  let headInfo = ['Name', 'Age', 'Salary', 'City']; 

  headInfo.forEach(item => {
    let tdhead = document.createElement('td');
    tdhead.classList.add('table__item');
    tdhead.innerHTML = item;
    trhead.appendChild(tdhead);
  });
  thead.appendChild(trhead);
  this.el.appendChild(thead);


  let tbody = document.createElement('tbody');

  items.forEach(item => {
    let trbody = document.createElement('tr');
    trbody.classList.add('table__row');
    for (let key in item) {
      let tdbody = document.createElement('td');
      tdbody.classList.add('table__item');
      tdbody.innerHTML = item[key];
      trbody.appendChild(tdbody);
      tbody.appendChild(trbody);
    }
  });
  this.el.appendChild(tbody);


  this.sort = (column, desc = false) => {
    let trs = Array.from(tbody.rows);

    if (column === 0) {
      trs.sort((rowA, rowB) => {
        return rowA.cells[column].innerHTML > rowB.cells[column].innerHTML ? 1 : -1;
      });
      if (desc === true) {
        trs.reverse();
      }
      tbody.append(...trs);
    }

    if (column === 2) {      
      trs.sort((rowA, rowB) => {
        return rowA.cells[column].innerHTML - rowB.cells[column].innerHTML;
      });
      if (desc === true) {
        trs.reverse();
      }
      tbody.append(...trs);
    }
  };
}
