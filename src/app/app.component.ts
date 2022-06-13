import { Component, OnInit } from '@angular/core';
import { Observable } from './classes/myObservable.class';
import { Map as myMapOperator} from './classes/myMapOperator.class';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reverse-rxjs';

  public square = (num: number) => num * num;

  private pipe = (f, g) => x => g(f(x));//pipe function to compose function, kind of currying function
  private improvedPipe = (...funcs) => x => funcs.reduce((effects, f) => f(effects), x);//to be able to pass in any numbers of functions and compose them
  private tap = fun => x => {
    fun(x);
    return x;
  };
  private Rx = {} as any;

  filter(x: any): any {
    return x;
  }

  printFunction(thing: any) {
    console.log(`I will print the ${thing}`);
  }
  multiplyBy2(num: number) {
    console.log(num * 2)
    return num * 2;
  }
  sum2(num: number) {
    console.log(num + 2)
  }

  fakeApi(o?) {
    setTimeout(() => {
      o.emit(1);
      o.emit(2);
      o.emit(3);
    }, 1000);
  }
  ngOnInit(): void {
    this.Rx.map = f => new myMapOperator(f);
    const o = new Observable();
    const o2 = new Observable();
    // o.subscribe(this.printFunction);
    // o.subscribe(this.multiplyBy2);
    // o.subscribe(this.sum2);
    // o.subscribe(
    //   this.improvedPipe(
    //     this.square,
    //     this.multiplyBy2,
    //     this.tap(this.printFunction),
    //     this.square,
    //     this.printFunction
    //   )
    // );
    // this.fakeApi(o);
    // o.pipe(o2);

    // o2.subscribe(
    //   this.improvedPipe(
    //     this.multiplyBy2,
    //     this.multiplyBy2,
    //     this.printFunction
    //   )
    // )
    const c = o.pipe(this.Rx.map(v => v * -3));
    c.subscribe(
      this.improvedPipe(
        this.multiplyBy2,
        this.printFunction
      )
    );

    // o.subscribe(
    //   this.improvedPipe(
    //     this.filter(x => {
    //       if(x > 0) {
    //         console.log('In Range')
    //         return x;
    //       }
    //       console.log('Out of Range')
    //       return 0
    //     }),
    //     this.square,
    //     this.tap(this.printFunction)
    //   ));

    // o.emit("Apple");
    // o.emit("Orange");
    // o.emit("Pear");

    // o.emit(2);
    // o.emit(-4);
    // o.emit(8);
    // o.emit(4);
  }

}
