var elbo = require('elbo');

var getToggles = function(group) {
  return [].slice.call(group.querySelectorAll('[is=aria-toggle]'));
};

module.exports = elbo.register('aria-toggle-group', {
  properties: {
    exclusive: {
      initial: function() {
        return this.getAttribute('exclusive') !== 'false';
      },
      parse: function(value) {
        return value && value !== 'false';
      },
      reflect: true
    }
  },

  events: {
    'open': function(e) {
      if (this.exclusive) {
        getToggles(this).forEach(function(toggle) {
          if (toggle !== e.target) {
            toggle.close && toggle.close();
          }
        });
      }
    }
  }
});
