import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//componentes
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SharedModule } from './components/shared/shared.module';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AddUsuarioComponent } from './components/usuarios/add-usuario/add-usuario.component';
import { EditUsuarioComponent } from './components/usuarios/edit-usuario/edit-usuario.component';
import { SeeUsuarioComponent } from './components/usuarios/see-usuario/see-usuario.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    UsuariosComponent,
    AddUsuarioComponent,
    EditUsuarioComponent,
    SeeUsuarioComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
