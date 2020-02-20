/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let arr = [];
  for (let user in users) {
    arr.push(users[user].name);
  }
  return arr;
}
