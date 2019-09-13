import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component:  LoginFormComponent},
];

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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