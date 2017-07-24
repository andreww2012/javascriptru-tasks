// Добавьте событие в голосовалку, созданную в задаче Голосовалка
// (widgets-structure-4.js), используя механизм генерации событий на объекте.
// Пусть каждое изменение голоса сопровождается событием change со свойством
// detail, содержащим обновлённое значение:
/*
var voter = new Voter({
  elem: document.getElementById('voter')
});
voter.setVote(5);
document.getElementById('voter').addEventListener('change', function(e) {
  alert( e.detail ); // новое значение голоса
});
*/
// Все изменения голоса должны производиться централизованно, через метод
// setVote, который и генерирует событие.


function Voter(options) {
  let voter = options.elem;

  let voteMinus = voter.children[0];
  let votePlus = voter.children[2];
  let voteResult = voter.children[1];
  let currentVotes = +voteResult.innerHTML;

  function setVote(vote) {
    voteResult.innerHTML = currentVotes = vote;

    // Решение задачи: добавляем событие
    voter.dispatchEvent(new CustomEvent("change", {
      bubbles: true,
      detail: vote
    }));
  }

  voter.onmousedown = () => false;

  voteMinus.onclick = () => {
    setVote(--currentVotes);
  }

  votePlus.onclick = () => {
    setVote(++currentVotes);
  }

  this.setVote = setVote;
}
