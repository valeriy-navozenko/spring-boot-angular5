import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CommitListComponent} from './commit-list/commit-list.component';
import {HttpClientModule} from '@angular/common/http';
import {RoundPipe} from './round.pipe';
import { RefreshButtonComponent } from './refresh-button/refresh-button.component';


@NgModule({
  declarations: [
    AppComponent,
    CommitListComponent,
    RoundPipe,
    RefreshButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RoundPipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
