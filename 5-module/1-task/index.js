/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  const trs = table.getElementsByTagName('tr');

  for (let i = 1; i < trs.length; i++) {

    if (trs[i].cells[1].innerHTML < '18') {
      trs[i].style.textDecoration = 'line-through';
    }

    if (trs[i].cells[2].innerHTML === 'm') {
      trs[i].classList.add('male');
    } else {
      trs[i].classList.add('female');
    }

    if (trs[i].cells[3].dataset.available === 'true') {
      trs[i].classList.add('available');
    } else if (trs[i].cells[3].hasAttribute('data-available') === false) {
      trs[i].setAttribute('hidden', '');
    } else {
      trs[i].classList.add('unavailable');
    }
  }

}