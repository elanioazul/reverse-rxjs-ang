//import { Observable as officialObservable} from "rxjs";
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

  pipe(observable: Observable): void {
    const fn = x => observable.emit(x);
    this.subscribe(fn);
  }
}