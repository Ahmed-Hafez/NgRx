import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx/counter.reducer';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { FormsModule } from '@angular/forms';
import { CounterChannelComponent } from './counter-channel/counter-channel.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CounterInputComponent,
    CounterChannelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({counter: counterReducer}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
