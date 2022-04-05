import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EgyptNewsComponent } from './components/egypt-news/egypt-news.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsaNewsComponent } from './components/usa-news/usa-news.component';
import { MaxLengthPipe } from './pipes/max-length.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EgyptNewsComponent,
    UsaNewsComponent,
    NavbarComponent,
    MaxLengthPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
