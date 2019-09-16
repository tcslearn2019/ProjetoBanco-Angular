import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PrincipalFormComponent } from './components/principal-form/principal-form.component';
import { HeaderComponent } from './components/header/header.component';
import { TransferenciasFormComponent } from './components/transferencias-form/transferencias-form.component';

const appRoutes:Routes = [
  {path:'', component: LoginFormComponent},
  {path: 'pr', component: PrincipalFormComponent},
  {path: 'transf', component: TransferenciasFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PrincipalFormComponent,
    HeaderComponent,
    TransferenciasFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
