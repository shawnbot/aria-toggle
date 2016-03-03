var getToggle = function(el) {
  var selector = '[aria-controls="' + el.id + '"]';
  return document.querySelector(selector);
};

module.exports = function(e) {
  var id = location.hash.substr(1);
  if (id) {
    var target = document.getElementById(id);
    var toggle = getToggle(target) || target;
    if (toggle && toggle.getAttribute('is') === 'aria-toggle') {
      toggle.open();
      requestAnimationFrame(function() {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  }
};
