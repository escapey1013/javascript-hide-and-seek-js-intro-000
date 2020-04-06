function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var target = document.querySelector('div.nested div.target');
  return target
}
