require('document-register-element');

window.ARIAToggle = require('./aria-toggle');
window.ARIAToggleGroup = require('./aria-toggle-group');

(function(hashchange) {
  window.addEventListener('hashchange', hashchange);
  window.addEventListener('load', hashchange);

  window.ARIAToggle.removeListeners = function() {
    window.removeEventListener('hashchange', hashchange);
    window.removeEventListener('load', hashchange);
  };
})(require('./hashchange'));
