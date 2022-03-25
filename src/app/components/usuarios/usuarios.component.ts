import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'cedula','actions'];
  dataSource!: MatTableDataSource<any>;
  listUsuarios: User[] = [];

 
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.listUsuarios = this.userService.getUsuario();
    this.dataSource = new MatTableDataSource(this.userService.listUsuarios);

  }

  eliminarUsuario(id : number){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: `quieres eliminar el usuario ${id}!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUsuario(id);
        this.getUsers();
        console.log(this.listUsuarios.length)
        swalWithBootstrapButtons.fire(
          'Deleted!',
          `el usuario ${id}`,
          'success'
        )
       
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })


  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  userEdit(id: number){
    this.router.navigate(['/dashboard/editUser',id])
  }

  seeUser(id: number){
    this.router.navigate(['/dashboard/seeUser', id])
  }

}
