// Метод elem.matches(css) в некоторых старых браузерах поддерживается под старым именем
// matchesSelector или с префиксами, то есть: webkitMatchesSelector (старый Chrome, Safari),
// mozMatchesSelector (старый Firefox) или Element.prototype.msMatchesSelector (старый IE).
// Создайте полифилл, который гарантирует стандартный синтаксис elem.matches(css)
// для всех браузеров.

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector;
}
