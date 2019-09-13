import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PrincipalFormComponent } from './components/principal-form/principal-form.component';
import { CadastroFormComponent } from './components/cadastro-form/cadastro-form.component';
import { HeaderComponent } from './components/header/header.component';


const appRoutes:Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'pr', component: PrincipalFormComponent},
  {path: 'cadastro', component: CadastroFormComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PrincipalFormComponent,
    CadastroFormComponent,
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