function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var target = document.querySelector('div.nested div div div div.target');
  return target
}

