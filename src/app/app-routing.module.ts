import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TdfFormsComponent } from './tdf-forms/tdf-forms.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : "", redirectTo : '/enrollmentForm', pathMatch:'full'}, /* Default Home page */
  {path : 'enrollmentForm', component : TdfFormsComponent},
  {path : 'userDetail', component : UserDetailComponent},
  {path : "**", component : PageNotFoundComponent} /* If any url not found page */
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponent = [ TdfFormsComponent, 
                                  UserDetailComponent,
                                PageNotFoundComponent];

