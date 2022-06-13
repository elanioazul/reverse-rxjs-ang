import { Component, OnInit } from '@angular/core';
import { Observable, of, from, pipe} from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-pizarra',
  templateUrl: './pizarra.component.html',
  styleUrls: ['./pizarra.component.scss']
})
export class PizarraComponent implements OnInit {

  public emiter: Observable<number> = of(1,2,3,4);
  public anotherEmiter: Observable<number> = of(1,2);
  public emitArr: Observable<number> = from([5,6,7,8]);
  constructor() { }

  ngOnInit(): void {
    // this.emitArr.subscribe({
    //   next: (val: number) => {
    //     console.log(`value is at this point of the stream: ${val}`)
    //   }
    // })
    // const remainder = this.emiter.pipe(
    //   map((val: number) => {
    //     console.log(`recieved value: ${val}`);
    //     return val % 2;
    //   })
    // )
    // const porDosYString = this.emiter.pipe(
    //   map((val: number) => { return val * 2 }),
    //   map((val: number) => { return `str_${val}` })
    // )
    // remainder.subscribe((val:any) => {
    //   console.log(`remainder: ${val}`)
    // })
    // porDosYString.subscribe((val:string) => {
    //   console.log(`stringMap emmited: ${val}`)
    // })

    // const swallowingValues = this.emiter.pipe(
    //   map((val: number) => {
    //     console.log(`swallowing the value ${val}`)
    //     //forgot to return a value
    //   })
    // )
    // swallowingValues.subscribe((val: void) => {
    //   console.log(`subscriber recieved value : ${val}`)
    // })

    const swallogingAgain: Observable<number | null> = this.anotherEmiter.pipe(
      map((val: number) => {
        if (val < 2) {
          return null;
        }
        return val
      })
    );
    swallogingAgain.subscribe((val: number | null) => {
      console.log(`subscriber recieved value: ${val}`)
    })
  }

}
