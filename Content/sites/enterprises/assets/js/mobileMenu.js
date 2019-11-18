function openDrawer() {
  if (document.getElementById('mobile-drawer').classList.contains('mobile__drawer--hide')) {
    document.getElementById('mobile-drawer').classList.remove('mobile__drawer--hide');
    document.getElementById('mobile-drawer').classList.add('mobile__drawer--show');
  }
}

function closeDrawer() {
  if (document.getElementById('mobile-drawer').classList.contains('mobile__drawer--show')) {
    document.getElementById('mobile-drawer').classList.remove('mobile__drawer--show');
    document.getElementById('mobile-drawer').classList.add('mobile__drawer--hide');
  }
}

function toggleMobileSubNav(subNavTitle) {
  document.getElementById(subNavTitle).classList.toggle('hide');
  document.getElementById(`${subNavTitle}--hide`).classList.toggle('hide');
  document.getElementById(`${subNavTitle}--show`).classList.toggle('hide');
}

window.onload = function() {
  document.getElementById('expand-mobile').addEventListener('click', openDrawer);
  document.getElementById('close-mobile').addEventListener('click', closeDrawer);
  document.getElementsByClassName('mobile__drawer__page-mask')[0].addEventListener('click', closeDrawer);

  // close drawer when screen larger than mobile
  window.addEventListener('resize', () => window.innerWidth > 809 ? closeDrawer() : null);
}
