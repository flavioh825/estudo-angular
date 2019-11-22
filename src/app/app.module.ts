import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { DiretivaComponent } from './diretiva/diretiva.component';
import { DestaqueDirective } from './destaque.directive';
import { CpfDirective } from './diretiva/cpf/cpf.directive';
import { CpfComponent } from './diretiva/cpf/cpf.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { ChildComponent } from './component-communication/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    DiretivaComponent,
    DestaqueDirective,
    CpfDirective,
    CpfComponent,
    ComponentCommunicationComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
