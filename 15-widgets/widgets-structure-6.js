// Создайте функцию-конструктор StepVoter, которая наследует от голосовалки,
// созданной в задаче Голосовалка в прототипном стиле ООП
// (widgets-structure-5.js) и добавляет голосовалке опцию options.step, которая
// задаёт «шаг» голоса.
// В реальном проекте влияние клика на голосовалку может зависеть от полномочий
// или репутации посетителя.
// В качестве исходного кода используйте решение задачи Голосовалка в
// прототипном стиле ООП.
// P.S. Код voter.js изменять нельзя, нужно не переписать Voter, а
// отнаследовать от него.

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

// Начало решения

function StepVoter(options) {
  Voter.apply(this, arguments);
  this._step = options.step || 1;
};

StepVoter.prototype = Object.create(Voter.prototype);
StepVoter.prototype.constructor = StepVoter;

StepVoter.prototype._onClickIncrease = function() {
  this.setVote(this.currentVotes + this._step);
}

StepVoter.prototype._onClickDecrease = function() {
  this.setVote(this.currentVotes - this._step);
}
