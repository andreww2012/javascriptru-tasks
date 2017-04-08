function fibBinet(n) {
  var GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;

  return Math.round( Math.pow(GOLDEN_RATIO, n) / Math.sqrt(5) );
}
