/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  for (let friend of friends) {
    let li = document.createElement('li');
    li.innerHTML = `${friends.firstName} ${friends.lastName}`;
    ul.prepend(li);
  }

  return ul;
}
