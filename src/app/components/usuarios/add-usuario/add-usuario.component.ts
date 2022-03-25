import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.scss']
})
export class AddUsuarioComponent implements OnInit {

  form: FormGroup;

 
  constructor(private formBuilder: FormBuilder,
    private usuarioService: UserService,
    private router: Router,
    ) {
      this.form = this.formBuilder.group({
        id:['', Validators.required],
        nombre:['', Validators.required],
        apellido:['', Validators.required],
        cedula:['', Validators.required],
      })
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

  ngOnInit(): void {
  }

}
