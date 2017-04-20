// Перепишите функцию, используя оператор '?' или '||':

/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
*/

function checkAge(age) {
  return (age > 18) || confirm("Родители разрешили?");
}
