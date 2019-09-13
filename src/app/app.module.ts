import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PrincipalFormComponent } from './components/principal-form/principal-form.component';
import { HeaderComponent } from './header/header.component';


const appRoutes:Routes = [
  {path:'', component: LoginFormComponent},
  {path: 'pr', component: PrincipalFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PrincipalFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
