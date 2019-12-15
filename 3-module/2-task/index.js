/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  const reg = /(-?\d+.?\d+)/g;
  let arr = str.match(reg);
  arr.forEach((elem, i) => {
    arr[i] = parseFloat(elem);
  });
  const obj = {
    min: Math.min.apply(null, arr),
    max: Math.max.apply(null, arr),
  };
  return obj;
}
