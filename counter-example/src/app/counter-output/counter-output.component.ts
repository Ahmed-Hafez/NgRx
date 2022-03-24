import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
  counter$: Observable<number> | undefined;

  constructor(private store: Store<{counter: {counter: number}}>) { }

  ngOnInit(): void {
    this.counter$ = this.store.select('counter').pipe(map(val => val.counter))
  }
}
