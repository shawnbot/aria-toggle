var elbo = require('elbo');
var CustomEvent = require('custom-event');

var CONTROLS = 'aria-controls';
var EXPANDED = 'aria-expanded';
var HIDDEN = 'aria-hidden';

var EVENT_PROPS = {bubbles: true, cancelable: true};

var getTarget = function(owner) {
  var id = owner.getAttribute(CONTROLS);
  if (id) {
    return document.getElementById(id);
  }
};

module.exports = elbo.register('aria-toggle', {
  /**
   * use with HTML:
   *
   * <button is="aria-toggle"></button>
   *
   * or in JavaScript:
   *
   * document.createElement('button', 'aria-toggle');
   */
  'extends': 'button',

  lifecycle: {
    createdCallback: function() {
      // the initial value is inferred either from:
      // 1. the @aria-expanded attribute of the toggle, or
      // 2. the aria-hidden attribute of its target, defined by @aria-controls
      if (this.hasAttribute(EXPANDED)) {
        this.expanded = this.getAttribute(EXPANDED) !== 'false';
      } else {
        var target = getTarget(this);
        this.expanded = target && target.getAttribute(HIDDEN) !== 'true';
      }
    }
  },

  properties: {
    expanded: {
      // the value is always coerced to a Boolean: anything other than 'false'
      // or a literal `false` will be considered truthy.
      parse: function(value) {
        return value && value !== 'false';
      },

      // the change handler sets the target element's @aria-hidden to the
      // inverse of the expanded value
      change: function(value, previous) {
        // dispatch an 'open' or 'close' event depending on the value
        var type = value ? 'open' : 'close';
        var event = new CustomEvent(type, EVENT_PROPS);
        this.dispatchEvent(event);
        if (event.defaultPrevented) {
          // XXX because elbo doesn't short-circuit reflections
          this.setAttribute(EXPANDED, previous);
          return false;
        }

        var target = getTarget(this);
        if (target) {
          target.setAttribute(HIDDEN, !value);
        }
      },

      // reflect this value to the ARIA attribute
      reflect: EXPANDED
    }
  },

  // handy methods
  methods: {
    open: function() {
      this.expanded = true;
    },
    close: function() {
      this.expanded = false;
    },
    toggle: function() {
      this.expanded = !this.expanded;
    }
  },

  events: {
    // toggle on click
    'click': function(e) {
      this.toggle();
    }
  }
});
