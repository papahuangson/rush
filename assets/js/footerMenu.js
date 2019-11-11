// Note: The order of items between desktop and mobile are different,
// so we need two separate/reordered lists in order to display them
// in the correct order.

const links = [
{
    name: 'Rush Truck Centers',
    url: '#',
    id: 0
  },
  {
    name: 'Rush Towing Systems',
    url: '#',
    id: 4
  },
  {
    name: 'House of Trucks',
    url: '#',
    id: 7
  },
  {
    name: 'Perfection Truck Parts & Equipment',
    url: '#',
    id: 10
  },
  {
    name: 'Rush Bus Centers',
    url: '#',
    id: 1
  },
  {
    name: 'Rush Truck Leasing',
    url: '#',
    id: 5
  },
  {
    name: 'Momentum Fuel Technologies',
    url: '#',
    id: 8
  },
  {
    name: 'Chrome Country',
    url: '#',
    id: 11
  },
  {
    name: 'Rush Refuse Systems',
    url: '#',
    id: 2
  },
  {
    name: 'Rush Truck Insurance',
    url: '#',
    id: 6
  },
  {
    name: 'Custom Vehicle Solutions',
    url: '#',
    id: 9
  },
  {
    name: 'World Wide Tires',
    url: '#',
    id: 12
  },
  {
    name: 'Rush Crane Systems',
    url: '#',
    id: 3
  }
];

const mobileLinks = [
  {
    name: 'Rush Truck Centers',
    url: '#',
    id: 0
  },
  {
    name: 'House of Trucks',
    url: '#',
    id: 7
  },
  {
    name: 'Rush Bus Centers',
    url: '#',
    id: 1
  },
  {
    name: 'Momentum Fuel Technologies',
    url: '#',
    id: 8
  },
  {
    name: 'Rush Refuse Systems',
    url: '#',
    id: 2
  },
  {
    name: 'Custom Vehicle Solutions',
    url: '#',
    id: 9
  },
  {
    name: 'Rush Crane Systems',
    url: '#',
    id: 3
  },
  {
    name: 'Rush Towing Systems',
    url: '#',
    id: 4
  },
  {
    name: 'Chrome Country',
    url: '#',
    id: 11
  },
  {
    name: 'Rush Truck Leasing',
    url: '#',
    id: 5
  },
  {
    name: 'World Wide Tires',
    url: '#',
    id: 12
  },
  {
    name: 'Rush Truck Insurance',
    url: '#',
    id: 6
  },
  {
    name: 'Perfection Truck Parts & Equipment',
    url: '#',
    id: 10
  },
];

links.map(link => {
  var a = document.createElement('a');
  var linkText = document.createTextNode(link.name);
  a.appendChild(linkText);
  a.title = link.name;
  a.href = link.url;
  return document.getElementsByClassName('footer__content__item__links')[0].appendChild(a);
});

mobileLinks.map(link => {
  var a = document.createElement('a');
  var linkText = document.createTextNode(link.name);
  a.appendChild(linkText);
  a.title = link.name;
  a.href = link.url;
  return document.getElementsByClassName('footer__content__item__links--mobile')[0].appendChild(a);
});
