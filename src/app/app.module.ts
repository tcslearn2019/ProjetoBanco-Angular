import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PrincipalFormComponent } from './components/principal-form/principal-form.component';


const appRoutes:Routes = [
  {path:'', component: LoginFormComponent},
  {path: 'pr', component: PrincipalFormComponent}
];

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PrincipalFormComponent
  ],
  imports: [
    BrowserModule,
    LoginFormComponent,
    //PrincipalComponent,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }