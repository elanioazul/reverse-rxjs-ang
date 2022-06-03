export class Observable {
  fnArray;
  constructor() {
    this.fnArray = [];
  }

  subscribe(fn) {
    this.fnArray.push(fn);
  }

  emit(v) {
    this.fnArray.map(fun => fun(v));
  }
}