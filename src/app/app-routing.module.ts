import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DiretivaComponent } from './diretiva/diretiva.component';
import { CpfComponent } from './diretiva/cpf/cpf.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  },
  {
    path: 'diretiva',
    component: DiretivaComponent
  },
  {
    path: 'diretiva/cpf',
    component: CpfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
