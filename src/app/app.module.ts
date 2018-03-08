import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WchNgModule } from 'ibm-wch-sdk-ng';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  , WchNgModule.forRoot(environment)],
  providers: [],
  entryComponents: [],
bootstrap: [AppComponent]
})
export class AppModule { }
