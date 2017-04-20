// Превратите объект leader из примера ниже в JSON:

/*
var leader = {
  name: "Василий Иванович",
  age: 35
};
*/

// После этого прочитайте получившуюся строку обратно в объект.

var leader = {
  name: "Василий Иванович",
  age: 35
};

leaderJSON = JSON.stringify(leader);

leader = JSON.parse(leaderJSON);
