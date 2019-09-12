import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroFormComponent } from './components/cadastro-form/cadastro-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
