import { Component, OnInit } from '@angular/core';
import { Observable } from './classes/myObservable.class';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reverse-rxjs';

  public square = (num: number) => num * num;

  private pipe = (f, g) => x => g(f(x));//pipe function to compose function, kind of currying function

  printFunction(thing: any) {
    console.log(`I will print the ${thing}`);
  }
  multiplyBy2(num: number) {
    console.log(num * 2)
  }
  sum2(num: number) {
    console.log(num + 2)
  }
  ngOnInit(): void {
    const o = new Observable();
    // o.subscribe(this.printFunction);
    // o.subscribe(this.multiplyBy2);
    // o.subscribe(this.sum2);
    o.subscribe(x => this.printFunction(this.square(x)));

    // o.emit("Apple");
    // o.emit("Orange");
    // o.emit("Pear");

    o.emit(4)
  }

}
