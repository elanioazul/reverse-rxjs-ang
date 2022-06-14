import { Component, OnInit } from '@angular/core';
import { Observable, of, from, pipe, interval} from 'rxjs';
import {catchError, map, take, mergeMap} from 'rxjs/operators';
import { IValue, INestedObj } from 'src/app/interfaces/varias.interfaces';
import { IProductId, IProductDescription } from 'src/app/interfaces/catalogue.interface';
@Component({
  selector: 'app-pizarra',
  templateUrl: './pizarra.component.html',
  styleUrls: ['./pizarra.component.scss']
})
export class PizarraComponent implements OnInit {

  public emiter: Observable<number> = of(1,2,3,4);
  public anotherEmiter: Observable<number> = of(1,2);
  public emitArr: Observable<number> = from([5,6,7,8]);
  public sourceInterval: Observable<number> = interval(1000);
  public objEmit: Observable<INestedObj> = of(
    {id: {value: 1}},
    {},
    {id: {value: 2}}
  )
  public produtList = <Observable<IProductId>>from(
    [{id: 1}, {id: 2}, {id: 3}]
  )
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

    // const swallogingAgain: Observable<number | null> = this.anotherEmiter.pipe(
    //   map((val: number) => {
    //     if (val < 2) {
    //       return null;
    //     }
    //     return val
    //   })
    // );
    // swallogingAgain.subscribe((val: number | null) => {
    //   console.log(`subscriber recieved value: ${val}`)
    // })

    // const fivePulses = this.sourceInterval.pipe(
    //   take(5),
    //   map((val: number) => {
    //     console.log(`map received: ${val}`)
    //     return `string_${val}`
    //   })
    // )

    // fivePulses.subscribe((val: string) => {
    //   console.log(`${new Date().toLocaleTimeString()} ${val}`)
    // })
    const returnIdValue = this.objEmit.pipe(
      map((val: INestedObj) => {
        return val.id!.value!
      }),
      catchError((error: unknown) => {
        console.log(`stream cought : ${error}`);
        return of(null);
      })
    );
    returnIdValue.subscribe(
      (val: number) => {
        console.log(`recieved ${val}`)
      },
      //called when error occurs
      (error: unknown) => {
        console.log(`error: ${error}`)
      },
      //complete function
      () => {
        console.log(`complete`)
      }
    )

    // this.produtList.pipe(
    //   map((value: IProductId) => {
    //     console.log(`Product id: ${value.id}`);
    //     return this.getProductName(value.id);
    //   })
    // ).subscribe((value: Observable<IProductDescription>) => {
    //   value.subscribe((value: IProductDescription) => {
    //     console.log(`product name: ${value.name}`);
    //     console.log(`product desc: ${value.description}`);
    //   })
    // })
    this.produtList.pipe(
      mergeMap((value: IProductId): Observable<IProductDescription> => {
        console.log(`Product id: ${value?.id}`);
        return this.getProductName(value.id);
      })
    ).subscribe((value: IProductDescription) => {
        console.log(`product name: ${value.name}`);
        console.log(`product desc: ${value.description}`);
    })
  }

  

  getProductName(id: number): Observable<IProductDescription> {
    return of(
      {
        id: id,
        name: `Product_${id}`,
        description: `Description_${id}`
      }
    )
  }

}
