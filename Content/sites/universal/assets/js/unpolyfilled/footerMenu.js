// Note: The order of items between desktop and mobile are different,
// so we need two separate/reordered lists in order to display them
// in the correct order.

function generateDesktopFooterLinks(list) {
  if (document.getElementsByClassName('footer__content__item__links')[0]) {
    list.map(link => {
      var a = document.createElement('a');
      var linkText = document.createTextNode(link.name);
      a.appendChild(linkText);
      a.title = link.name;
      a.href = link.url;
      return document.getElementById('footer-links').appendChild(a);
    });
  }
}

function generateMobileFooterLinks(list) {
  if (document.getElementsByClassName('footer__content__item__links--mobile')[0]) {
    list.map(link => {
      var a = document.createElement('a');
      var linkText = document.createTextNode(link.name);
      a.appendChild(linkText);
      a.title = link.name;
      a.href = link.url;
      return document.getElementById('footer-links--mobile').appendChild(a);
    });
  }
}

/*istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    generateDesktopFooterLinks,
    generateMobileFooterLinks
  };
}