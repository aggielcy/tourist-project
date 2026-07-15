/* TIPA — shared behaviour: nav drawer + course filter tabs */
(function () {
  // Mobile navigation drawer
  var toggle = document.querySelector('.nav-toggle');
  var drawer = document.getElementById('nav-drawer');
  if (toggle && drawer) {
    toggle.addEventListener('click', function () {
      var open = drawer.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.querySelector('.nav-toggle__text').textContent = open ? '關閉' : '選單';
    });
  }

  // Course category filter (courses.html)
  var tabs = document.querySelectorAll('[data-filter]');
  var cards = document.querySelectorAll('[data-category]');
  if (tabs.length && cards.length) {
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var value = tab.getAttribute('data-filter');
        tabs.forEach(function (t) { t.setAttribute('aria-pressed', t === tab ? 'true' : 'false'); });
        cards.forEach(function (card) {
          var show = value === 'all' || card.getAttribute('data-category') === value;
          card.hidden = !show;
        });
      });
    });
  }
})();
