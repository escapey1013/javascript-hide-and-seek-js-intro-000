function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var target = nested.querySelector('div.target');
  return target
}

function increaseRankBy(n) {
  const rankedList = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < rankedList.length; i++) {
    parseInt(rankedList[i].innerHTML, 10);
    rankedList[i].innerHTML = i + n + 1;
  }
}
