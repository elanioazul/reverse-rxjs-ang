import {Observable} from './myObservable.class';
export class Map {
    private observable: any;
    func: any;
    constructor(func) {
      this.observable = new Observable();
      this.func = func;
    }
    subscribe(cb) {
      this.observable.subscribe(cb);
    }
    emit(x) {
      const val = this.func(x)
      return this.observable.emit(val);
    }
}