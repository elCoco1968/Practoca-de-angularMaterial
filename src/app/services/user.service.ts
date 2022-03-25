import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listUsuarios: User[] = [
    {id: 1, nombre: 'Monica', apellido: 'Morales', cedula: 123},
    {id: 2, nombre: 'Daniela', apellido: 'Gomez', cedula: 123},
    {id: 3, nombre: 'Andres', apellido: 'Zapata', cedula: 123},
    {id: 4, nombre: 'Alejandro', apellido: 'Gomez', cedula: 123},
    {id: 5, nombre: 'Mariana', apellido: 'Gomez', cedula: 123},
  ]
  
  
  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }
  deleteUsuario(id: number){
    this.listUsuarios.splice(id, 1);
  }

  aggUser(user : User){
    this.listUsuarios.unshift(user);
  }

  getUsuarioById(id : number){
    return this.listUsuarios[id];
  }

  editUser(id: number, user: User){
    this.listUsuarios[id] = {
      id : user.id,
      nombre : user.nombre,
      apellido : user.apellido,
      cedula : user.cedula,
    }
  }

}
