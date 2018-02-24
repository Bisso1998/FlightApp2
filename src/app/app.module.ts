import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultComponent } from './search-result/search-result.component';


@NgModule({
  declarations: [
    AppComponent, SearchBarComponent, SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
      NgbModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
