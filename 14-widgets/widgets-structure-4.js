// Напишите функцию-конструктор new Voter(options) для голосовалки. Она должна
// получать элемент в options.elem, в следующей разметке:
/*
<div id="voter" class="voter">
  <span class="down">—</span>
  <span class="vote">0</span>
  <span class="up">+</span>
</div>
*/
// По клику на + и — число должно увеличиваться или уменьшаться.
// Публичный метод voter.setVote(vote) должен устанавливать текущее число –
// значение голоса.
// Все остальные методы и свойства пусть будут приватными.

function Voter(options) {
  let voter = options.elem;

  let voteMinus = voter.children[0];
  let votePlus = voter.children[2];
  let voteResult = voter.children[1];
  let currentVotes = +voteResult.innerHTML;

  function setVote(vote) {
    voteResult.innerHTML = currentVotes = vote;
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
