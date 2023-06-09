import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/servicio/image.service';
import { ProyectoService } from 'src/app/servicio/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto: Proyecto = null;
  constructor(private proyectoS:ProyectoService, private activatedRouter:ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.proyectoS.detail(id).subscribe(
        data => {
          this.proyecto = data;
        }, err => {
          alert(err.error.mensaje);
          this.router.navigate(['']);
        }
      );
    }


  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.update(id, this.proyecto).subscribe(
      data => {
        alert('Proyecto actualizado con exito');
        this.router.navigate(['']);
      },err => {
        alert('No se pudo actualizar el proyecto');
      }

    );

  }
}
