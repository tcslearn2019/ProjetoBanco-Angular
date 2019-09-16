import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PrincipalFormComponent } from './components/principal-form/principal-form.component';
import { CadastroFormComponent } from './components/cadastro-form/cadastro-form.component';
import { HeaderComponent } from './components/header/header.component';
import { PrincipalGerenteComponent } from './components/principal-gerente/principal-gerente.component';
import { ListFormComponent } from './components/list-form/list-form.component';
import { InvestimentoNewComponent } from './components/investimento-new/investimento-new.component';
import { InvestimentoUserComponent } from './components/investimento-user/investimento-user.component';
import {UserService} from './shared_service/user.service';
import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms';

const appRoutes:Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'principal', component: PrincipalFormComponent},
  {path: 'cadastro', component: CadastroFormComponent},
  {path: 'principal-gerente', component: PrincipalGerenteComponent},
  {path: 'lista-clientes', component: ListFormComponent},
  {path: 'investimento-new', component: InvestimentoNewComponent},
  {path: 'investimento-user', component: InvestimentoUserComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PrincipalFormComponent,
    CadastroFormComponent,
    HeaderComponent,
    PrincipalGerenteComponent,
    ListFormComponent,
    InvestimentoNewComponent,
    InvestimentoUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }