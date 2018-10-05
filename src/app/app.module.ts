import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { EnrollementService } from './enrollement.service';
import { TdfFormsComponent } from './tdf-forms/tdf-forms.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TdfFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EnrollementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
