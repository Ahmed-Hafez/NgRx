import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { CounterInputComponent } from './counter/counter-input/counter-input.component';
import { FormsModule } from '@angular/forms';
import { CounterChannelComponent } from './counter/counter-channel/counter-channel.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CounterInputComponent,
    CounterChannelComponent,
    HomeComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({counter: counterReducer}),
    AppRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
