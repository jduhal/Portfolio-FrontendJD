import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/servicio/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string;
  porcentaje: number;
  imagen: string;

  constructor(private skillS:SkillService, private router:Router) { }

  ngOnInit(): void {

  }

  onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje, this.imagen);
    this.skillS.save(skill).subscribe(
      data => {
        alert('Skill creada con exito');
        this.router.navigate(['']);
      },
      err => {
        alert('No se pudo crear la skill');
        this.router.navigate(['']);
      }
    )
  }


}
