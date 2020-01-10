"use strict";

// Dropdown Menu
var menuIsOpen = false; // used for handling clicks on button

function toggleMenu(event, menuId) {
  event.preventDefault(); // if menu is open and there's a click - skip the open logic and close the menu

  if (!menuIsOpen) {
    var elem = document.getElementById(menuId);
    var buttonElement = event.target;
    document.getElementById("".concat(menuId, "--caret")).classList.toggle('rotate180');
    document.getElementById(menuId).style.display = 'block';
    buttonElement.setAttribute('aria-expanded', 'true');
    menuIsOpen = true; // add event listener for clicks outside element

    var outsideClickListener = function outsideClickListener(event) {
      if (!elem.contains(event.target) && event.target.closest("#".concat(menuId)) === null) {
        elem.style.display = 'none';
        buttonElement.setAttribute('aria-expanded', 'false');
        document.getElementById("".concat(menuId, "--caret")).classList.toggle('rotate180');
        menuIsOpen = false;
        removeClickListener();
      }
    };

    var removeClickListener = function removeClickListener() {
      document.removeEventListener('click', outsideClickListener);
    }; // add a setTimeout to allow bubbling to die down


    setTimeout(function () {
      return document.addEventListener('click', outsideClickListener);
    }, 1);
  }
}
/*istanbul ignore next */


if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    toggleMenu: toggleMenu
  };
}