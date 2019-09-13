import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastroFormComponent } from './components/cadastro-form/cadastro-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
=======
import { RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { CadastroFormComponent } from './components/cadastro-form/cadastro-form.component';
import { PrincipalFormComponent } from './components/principal-form/principal-form.component';


const appRoutes:Routes = [
  {path:'', component: CadastroFormComponent},
  {path: 'pr', component: PrincipalFormComponent}
];
>>>>>>> 75f6aa6470e42b078fd156584ffd0a137870e96b

@NgModule({
  declarations: [
    AppComponent,
    CadastroFormComponent,
<<<<<<< HEAD
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
=======
    PrincipalFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
>>>>>>> 75f6aa6470e42b078fd156584ffd0a137870e96b
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
