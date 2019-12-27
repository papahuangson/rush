function createDesktopNavigation(navId, list) {
  if (!document.getElementById(navId)) {
    return;
  }
  let secondLevelNav = [];
  const navElement = document.getElementById(navId);
  const ul = document.createElement('ul');
  ul.classList.add('header__content__navigation--top-level');
  list.map(function (link) {
    // check if this item is selected and has children - if so, add array to secondLevelNav
    if (link.selected && link.children && link.children.length > 0) {
      secondLevelNav = link.children;
    }

    // create list item
    const li = document.createElement('li');
    li.classList.add('header__content__navigation--top-level__link');

    // create link
    const a = document.createElement('a');
    a.classList.add('container');
    const linkText = document.createTextNode(link.name);
    a.appendChild(linkText);
    a.title = link.name;

    if (link.children && link.children.length === 0) {
        a.href = link.url;
    }

    // mark as selected if selected
    if (link.selected) {
      a.classList.add('selected');
    }

    // child link logic
    if (link.children && link.children.length > 0) {
      // add onclick
      a.onclick = function (event) { toggleMenu(event, link.uniqueId) };

      // add caret
      const caretImg = document.createElement('img');
      caretImg.setAttribute('src', 'Content/sites/enterprises/assets/svg/caret-black.svg');
      caretImg.setAttribute('aria-label', 'Expand Sub Navigation');
      caretImg.setAttribute('id', `${link.uniqueId}--caret`);
      a.appendChild(caretImg);

      li.appendChild(a);

      // create dropdown
      const dropdownElement = document.createElement('div');
      dropdownElement.classList.add('dropdown-menu');
      dropdownElement.setAttribute('id', link.uniqueId);
      dropdownElement.setAttribute('style', 'display: none;');

      const dropdownUl = document.createElement('ul');

      link.children.map(function (child) {
        const childItem = document.createElement('li');
        const childLink = document.createElement('a');
        const childLinkText = document.createTextNode(child.name);
        childLink.appendChild(childLinkText);
        childLink.title = child.name;
        childLink.href = child.url;
        childItem.appendChild(childLink);
        dropdownUl.appendChild(childItem);
      });

      dropdownElement.appendChild(dropdownUl);
      li.appendChild(dropdownElement);
    } else {
      li.appendChild(a);
    }

    // add ribbon to li
    // create ribbon
    const ribbon = document.createElement('span');
    ribbon.classList.add('ribbon');
    a.appendChild(ribbon);

    ul.appendChild(li);
  });

  // add ul to dom
  navElement.appendChild(ul);


  // logic to display 2nd level navigation
  if (secondLevelNav.length > 0) {
    const secondLevelElement = document.createElement('div');
    secondLevelElement.classList.add('header__content__navigation--with-child__child');

    secondLevelNav.map(function (link) {
      const secondLevelLink = document.createElement('a');
      const secondLevelText = document.createTextNode(link.name);
      secondLevelLink.classList.add('container');
      if (link.selected) {
        secondLevelLink.classList.add('selected');
      }
      secondLevelLink.appendChild(secondLevelText);
      secondLevelLink.title = link.name;
      secondLevelLink.href = link.url;

      const ribbon = document.createElement('span');
      ribbon.classList.add('ribbon');
      secondLevelLink.appendChild(ribbon);

      secondLevelElement.appendChild(secondLevelLink);

      // add class to nav noting it has children
      navElement.classList.add('header__content__navigation--with-child');
    });

    navElement.appendChild(secondLevelElement);
  }
}

function createMobileNavigation(navId, list) {
  if (!document.getElementById(navId)) {
    return;
  }
  const navElement = document.getElementById(navId);
  const ul = document.createElement('ul');

  list.map(function (link) {
    // create list item
    const li = document.createElement('li');
    li.classList.add('mobile__drawer__body__navigation__item');

    // create link
    const a = document.createElement('a');
    const linkText = document.createTextNode(link.name);
    a.appendChild(linkText);
    a.title = link.name;

    if (link.children && link.children.length === 0) {
        a.href = link.url;
    }

    if (link.children && link.children.length > 0) {
      const childMenuId = `${link.uniqueId}--child-menu`;
      a.onclick = function (event) { toggleMobileSubNav(event, childMenuId) };
      a.setAttribute('aria-expanded', 'false');
      a.setAttribute('aria-label', 'Toggle Sub Navigation');

      const expandControl = document.createElement('img');
      expandControl.setAttribute('src', '/Content/sites/enterprises/assets/svg/collapse-mobile-gray.svg');
      expandControl.setAttribute('id', `${childMenuId}--hide`);
      expandControl.classList.add('mobile__drawer__body__navigation__item__expand-control');
      expandControl.classList.add('hide');

      const minimizeControl = document.createElement('img');
      minimizeControl.setAttribute('src', '/Content/sites/enterprises/assets/svg/expand-mobile-gray.svg');
      minimizeControl.setAttribute('id', `${childMenuId}--show`);
      minimizeControl.classList.add('mobile__drawer__body__navigation__item__expand-control');

      a.appendChild(expandControl);
      a.appendChild(minimizeControl);

      li.appendChild(a);

      const subNavMenu = document.createElement('ul');
      subNavMenu.classList.add('mobile__drawer__body__navigation__item__child--list');
      subNavMenu.classList.add('hide');
      subNavMenu.setAttribute('id', childMenuId);

      link.children.map(function (child) {
        const childLi = document.createElement('li');
        childLi.classList.add('mobile__drawer__body__navigation__item');
        childLi.classList.add('mobile__drawer__body__navigation__item__child');

        if (child.selected) {
          childLi.classList.add('mobile__drawer__body__navigation__item--selected');
        }

        const childLink = document.createElement('a');
        const childLinkText = document.createTextNode(child.name);
        childLink.appendChild(childLinkText);
        childLink.title = child.name;
        childLink.href = child.url;

        childLi.appendChild(childLink);
        subNavMenu.appendChild(childLi);
        ul.appendChild(li);
        ul.appendChild(subNavMenu);
      });
    } else {
      li.appendChild(a);
      ul.appendChild(li);
    }

    // add divider to ul
    const divider = document.createElement('li');
    divider.classList.add('mobile__drawer__body__navigation--divider');
    ul.appendChild(divider);
  })

  navElement.appendChild(ul);
}

/*istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    createDesktopNavigation,
    createMobileNavigation
  };
}
