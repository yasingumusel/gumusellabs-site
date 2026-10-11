// Dil seçimi: kayıtlı tercih, yoksa tarayıcı dili (Türkçe ise tr, değilse en). Düğme ikisi arasında geçer.
(function () {
  var l = null;
  try { l = localStorage.getItem('lang'); } catch (e) { /* özel pencere */ }
  if (l !== 'tr' && l !== 'en') l = (navigator.language || 'en').toLowerCase().indexOf('tr') === 0 ? 'tr' : 'en';
  var root = document.documentElement;
  function apply() { root.setAttribute('data-l', l); root.setAttribute('lang', l); }
  apply();
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('.lang');
    if (!b) return;
    l = l === 'tr' ? 'en' : 'tr';
    try { localStorage.setItem('lang', l); } catch (e) { /* yok say */ }
    apply();
  });
})();
