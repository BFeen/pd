export default class DaysModel {
  constructor(days) {
    this._days = Array.from(days);
    this._changeViewHandlers = [];

    this.shuffle = this.shuffle.bind(this);
  }

  getDays() {
    return this._days;
  }

  shuffle() {
    const days = [].concat(this._days);
    for (let i = days.length - 1; i > 0; i--) {
      const place = Math.floor(Math.random() * (i + 1));
      [days[i], days[place]] = [days[place], days[i]];
    }
    
    this._days = days;
  }
}
