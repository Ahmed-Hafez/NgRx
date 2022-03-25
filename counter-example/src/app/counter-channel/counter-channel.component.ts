import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannelName } from '../ngrx/counter.actions';
import { channelNameSelector } from '../ngrx/counter.selectors';
import { CounterState } from '../ngrx/counter.state';

@Component({
  selector: 'app-counter-channel',
  templateUrl: './counter-channel.component.html',
  styleUrls: ['./counter-channel.component.scss']
})
export class CounterChannelComponent implements OnInit {
  channelName: string | undefined;

  constructor(private store: Store<{counter: CounterState}>) { }

  ngOnInit(): void {
    this.store.select(channelNameSelector).subscribe(channelName => this.channelName = channelName)
  }

  changeChannelName() {
    this.store.dispatch(changeChannelName())
  }

}
