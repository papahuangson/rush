// Dropdown Menu
let menuIsOpen = false; // used for handling clicks on button
function toggleMenu(event, menuId) {
  event.preventDefault();

  // if menu is open and there's a click - skip the open logic and close the menu
  if (!menuIsOpen) {
    const elem = document.getElementById(menuId);
    const buttonElement = event.target;

    document.getElementById(menuId+"--caret").classList.toggle('rotate180');

    document.getElementById(menuId).style.display = 'block';
    buttonElement.setAttribute('aria-expanded', 'true');
    menuIsOpen = true;

    // add event listener for clicks outside element
    const outsideClickListener = function (event) {
      if (!elem.contains(event.target) && event.target.closest("#"+menuId) === null) {
        elem.style.display = 'none';
        buttonElement.setAttribute('aria-expanded', 'false');

        document.getElementById(menuId+"--caret").classList.toggle('rotate180');

        menuIsOpen = false;
        removeClickListener();
      }
    }

    const removeClickListener = function () {
      document.removeEventListener('click', outsideClickListener);
    }

    // add a setTimeout to allow bubbling to die down
    setTimeout(function () { document.addEventListener('click', outsideClickListener) }, 1);
  }
}

/*istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    toggleMenu
  };
}
