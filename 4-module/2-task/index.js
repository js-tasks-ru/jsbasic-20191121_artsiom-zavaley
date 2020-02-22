/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) {
    for (let j = i; j <= table.rows[i].cells.length; j++) {
      if (i == j) {
        table.rows[i].cells[j].style.backgroundColor = 'red';
      }
    }
  }
}
