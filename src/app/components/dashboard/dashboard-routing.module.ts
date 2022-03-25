import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { AddUsuarioComponent } from '../usuarios/add-usuario/add-usuario.component';
import { EditUsuarioComponent } from '../usuarios/edit-usuario/edit-usuario.component';
import { SeeUsuarioComponent } from '../usuarios/see-usuario/see-usuario.component';


const routes: Routes = [
  {path: '', component: DashboardComponent, children : [
    {path: '', component: InicioComponent},
    {path: 'perfil', component: PerfilComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'addUser', component: AddUsuarioComponent},
    {path: 'editUser/:id', component: EditUsuarioComponent},
    {path: 'seeUser/:id', component: SeeUsuarioComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
