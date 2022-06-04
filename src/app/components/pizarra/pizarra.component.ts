import { Component, OnInit } from '@angular/core';
import { Observable, of, from} from 'rxjs';
@Component({
  selector: 'app-pizarra',
  templateUrl: './pizarra.component.html',
  styleUrls: ['./pizarra.component.scss']
})
export class PizarraComponent implements OnInit {

  public emiter: Observable<number> = of(1,2,3,4);
  constructor() { }

  ngOnInit(): void {
    this.emiter.subscribe({
      next: (val: number) => {
        console.log(`value is at this point of the stream: ${val}`)
      }
    })
  }

}
