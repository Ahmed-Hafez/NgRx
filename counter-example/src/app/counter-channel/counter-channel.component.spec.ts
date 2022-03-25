import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterChannelComponent } from './counter-channel.component';

describe('CounterChannelComponent', () => {
  let component: CounterChannelComponent;
  let fixture: ComponentFixture<CounterChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
