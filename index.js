function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var target = nested.querySelector('div.target');
  return target
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedList.length; i < l; i++) {
    let children = rankedList[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  const tree = document.getElementById('.grand-node');

   while (tree[0] = tree.children[0]) {
     const tree = tree.children[0];

   }
   return tree.innerHTML;
}
