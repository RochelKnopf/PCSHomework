window.app = window.app || {};
window.app.pcsTools = (function () {
  'use strict';

  function get(selector) {
    return document.querySelector(selector);
  }

  function setCss(elem, property, value) {
    elem.style[property] = value;
  }

  function getCss(elem, property) {
    return elem.style[property];
  }

  function addEventListener(elem, type, callback) {
    elem.addEventListener(type, callback);
  }

  function getRandomColorPart() {
    return Math.floor(Math.random() * 256); //gets random number between 0 and 255, floor rounds it down
  }

  function getRandomColor() {
    const r = getRandomColorPart();
    const g = getRandomColorPart();
    const b = getRandomColorPart();

    return `rgb(${r}, ${g}, ${b})`;
  }

  return {
    wrap: function (selector) {
      const elem = get(selector);
      return {
        /* setCss: (property, value) => setCss(elem, property, value),
        getCss: (property) => getCss(elem, property) */

        css: function(property, value) {
          if (arguments.length === 2) {
            setCss(elem, property, value);
            return this;
          } else {
            return getCss(elem, property);
          }
        },
        click: function(callback) { 
          addEventListener(elem, 'click', callback);
          return this;
        },
        hide: function () { 
          setCss(elem, 'display', 'none');
          return this;
        },
        show: function(displayValue = 'block')  {
          setCss(elem, 'display', displayValue);
          return this;
        },
        flash: function (speed) {
          setInterval(() => {
            const color = getRandomColor();
            setCss(elem, 'color', color);
          }, speed);
          return this;
        }

      };
    }
  };
})();


