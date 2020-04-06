function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var target = nested.querySelector('div.target');
  return target
}

function increaseRankBy(n) {
  const rankedList = document
    .getElementById('app')
    .querySelectorAll('ranked-list');

  for (let i = 0; i < rankedList.length; i++) {
    parseInt(rankedList[i].innerHTML);
    rankedList[i].innerHTML = (i + n).toString();
  }
}
