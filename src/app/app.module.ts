import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JituModule } from './jitu/jitu.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JituModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
