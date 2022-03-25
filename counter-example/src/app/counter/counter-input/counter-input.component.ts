import { increment, decrement, customIncrement, customDecrement } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss']
})
export class CounterInputComponent implements OnInit {

  value:number = 0;

  constructor(private store: Store<{counter: CounterState}>) { }

  ngOnInit(): void {

  }

  increment() {
    this.store.dispatch(customIncrement({value: Number(this.value)}))
  }

  decrement() {
    this.store.dispatch(customDecrement({value: Number(this.value)}))
  }

}
