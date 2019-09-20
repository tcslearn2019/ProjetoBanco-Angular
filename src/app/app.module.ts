import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PrincipalFormComponent } from './components/principal-form/principal-form.component';
import { CadastroFormComponent } from './components/cadastro-form/cadastro-form.component';
import { HeaderComponent } from './components/header/header.component';
import { TransferenciasFormComponent } from './components/transferencias-form/transferencias-form.component';
import { PrincipalGerenteComponent } from './components/principal-gerente/principal-gerente.component';
import { ListFormComponent } from './components/list-form/list-form.component';
import { InvestimentoNewComponent } from './components/investimento-new/investimento-new.component';
import { InvestimentoUserComponent } from './components/investimento-user/investimento-user.component';
import { UserService } from './shared_service/user.service';
import { EmprestimoUserComponent } from './components/emprestimo-user/emprestimo-user.component';
import { RecuperarSenhaComponent } from './components/recuperar-senha/recuperar-senha.component';
import { HeaderGerenteComponent } from './components/header-gerente/header-gerente.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ListInvestimentComponent } from './components/list-investiment/list-investiment.component';
import { HttpModule } from '@angular/http';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { ParticlesModule } from 'angular-particle';

const appRoutes:Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'principal', component: PrincipalFormComponent},
  {path: 'cadastro', component: CadastroFormComponent},
  {path: 'principal-gerente', component: PrincipalGerenteComponent},
  {path: 'lista-clientes', component: ListFormComponent},
  {path: 'lista-investiments', component: ListInvestimentComponent},
  {path: 'investimento-new', component: InvestimentoNewComponent},
  {path: 'investimento-user', component: InvestimentoUserComponent},
  {path: 'emprestimo-user', component: EmprestimoUserComponent},
  {path: 'recuperar-senha', component: RecuperarSenhaComponent},
  {path: 'transferencia', component: TransferenciasFormComponent}
];

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PrincipalFormComponent,
    HeaderComponent,
    TransferenciasFormComponent,
    CadastroFormComponent,
    HeaderComponent,
    PrincipalGerenteComponent,
    ListFormComponent,
    InvestimentoNewComponent,
    InvestimentoUserComponent,
    EmprestimoUserComponent,
    RecuperarSenhaComponent,
    HeaderGerenteComponent,
    ListInvestimentComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxMaskModule.forRoot(options),
    ParticlesModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }