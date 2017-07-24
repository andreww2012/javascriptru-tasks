// Поменяйте стиль ООП в голосовалке, созданной в задаче Голосовалка
// (widgets-structure-4.js) на прототипный.
// Внешний код, использующий класс Voter, не должен измениться.
// В качестве исходного кода возьмите решение задачи Голосовалка.

function Voter(options) {
  let voter = this.voter = options.elem;
  this.currentVotes = +voter.children[1].innerHTML;

  voter.onmousedown = () => false;
  voter.children[0].onclick = this._onClickDecrease.bind(this);
  voter.children[2].onclick = this._onClickIncrease.bind(this);
}

Voter.prototype.setVote = function(vote) {
  this.voter.children[1].innerHTML = this.currentVotes = vote;
};

Voter.prototype._onClickIncrease = function() {
  this.setVote(++this.currentVotes);
};

Voter.prototype._onClickDecrease = function() {
  this.setVote(--this.currentVotes);
};
