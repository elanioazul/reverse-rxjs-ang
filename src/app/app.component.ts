import { Component, OnInit } from '@angular/core';
import { Observable } from './classes/myObservable.class';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reverse-rxjs';

  printFunction(thing: string) {
    console.log(`I will print the ${thing}`);
  }
  ngOnInit(): void {
    const o = new Observable();
    o.subscribe(this.printFunction);
    o.emit("Apple");
    o.emit("Orange");
    o.emit("Pear");
  }

}
