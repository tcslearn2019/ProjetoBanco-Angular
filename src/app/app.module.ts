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
import { RealizarEmprestimoComponent } from './components/realizar-emprestimo/realizar-emprestimo.component';
import { VerEmprestimoComponent } from './components/ver-emprestimo/ver-emprestimo.component';
import { RealizarInvestimentoComponent } from './components/realizar-investimento/realizar-investimento.component';
import { VerInvestimentoComponent } from './components/ver-investimento/ver-investimento.component';
import { FooterComponent } from './components/footer/footer.component';
import { OperacaoInvestimentoComponent } from './components/operacao-investimento/operacao-investimento.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

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
  {path: 'transferencia', component: TransferenciasFormComponent},
  {path: 'realizar-emprestimo', component: RealizarEmprestimoComponent},
  {path: 'ver-emprestimos', component: VerEmprestimoComponent},
  {path: 'realizar-investimento', component: RealizarInvestimentoComponent},
  {path: 'ver-investimento', component: VerInvestimentoComponent},
  {path: 'extrato', component: ExtratoComponent},
  {path: 'resgate-adicione', component: OperacaoInvestimentoComponent}
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
    ExtratoComponent,
    RealizarEmprestimoComponent,
    VerEmprestimoComponent,
    RealizarInvestimentoComponent,
    VerInvestimentoComponent,
    FooterComponent,
    OperacaoInvestimentoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxMaskModule.forRoot(options),
    AngularFontAwesomeModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }