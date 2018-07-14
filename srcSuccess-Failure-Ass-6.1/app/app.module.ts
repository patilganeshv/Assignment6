import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompFailureDirective } from './comp-failure.directive';
import { CompSuccessDirective } from './comp-success.directive';

@NgModule({
  declarations: [
    AppComponent,
    
    CompFailureDirective,
    CompSuccessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
