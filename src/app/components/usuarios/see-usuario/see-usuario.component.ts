import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-see-usuario',
  templateUrl: './see-usuario.component.html',
  styleUrls: ['./see-usuario.component.scss']
})
export class SeeUsuarioComponent implements OnInit {

  form: FormGroup;
  public user!: User;


  // //Parametros a obtener
  id : number = 0;
  nombre : string = '';
  apellido : string = '';
  cedula : number= 0;



 
  constructor(private formBuilder: FormBuilder,
    private usuarioService: UserService,
    private router: Router,
    private activatedRoute : ActivatedRoute
    ) {
      this.form = this.formBuilder.group({
      id:[{value: '', disabled: true}, Validators.required],
      nombre:[{value: '', disabled: true}, Validators.required],
      apellido:[{value: '', disabled: true}, Validators.required],
      cedula:[{value: '', disabled: true}, Validators.required]
    })
  }

     validators(){
      
     }

     aggUser(){
       const user: User = {
         id : this.form.value.id,
         nombre : this.form.value.nombre,
         apellido : this.form.value.apellido,
         cedula : this.form.value.cedula
       }

       this.usuarioService.aggUser(user);
       this.router.navigate(['/dashboard/usuarios'])
       console.log(user);
     }

     //Obtencion del id por la URL
     getUserParams(){
       this.activatedRoute.params.subscribe(params => {
         this.id = params["id"] || null;
         this.getUser(this.id);
       })
     }

     getUser(id :number){
      this.user =  this.usuarioService.getUsuarioById(id);
      this.user = this.user;
      this.formUsuario();
     }

    ngOnInit(): void {
      this.getUserParams();
    }

    formUsuario(){
      this.form.controls['id'].setValue(this.user.id);
      this.form.controls['nombre'].setValue(this.user.nombre);
      this.form.controls['apellido'].setValue(this.user.apellido);
      this.form.controls['cedula'].setValue(this.user.cedula);
    }

    editUser(){
      this.usuarioService.editUser(this.id,this.user);
    }

}
