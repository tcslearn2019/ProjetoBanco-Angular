import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { CadastroFormComponent } from './components/cadastro-form/cadastro-form.component';
import { PrincipalFormComponent } from './components/principal-form/principal-form.component';


const appRoutes:Routes = [
  {path:'', component: CadastroFormComponent},
  {path: 'pr', component: PrincipalFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroFormComponent,
    PrincipalFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
