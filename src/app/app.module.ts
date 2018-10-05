import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponent } from './app-routing.module';



import { AppComponent } from './app.component';
import { DataStorage } from './data-storage';
import { EnrollementService } from './enrollement.service';
import { TdfFormsComponent } from './tdf-forms/tdf-forms.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    TdfFormsComponent,
    UserDetailComponent,
    PageNotFoundComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [EnrollementService, DataStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
