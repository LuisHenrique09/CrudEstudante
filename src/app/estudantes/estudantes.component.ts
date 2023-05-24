import { Component } from '@angular/core';
import { EstudantesService } from '../estudantes.service';
import { Estudantes } from '../Estudantes';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent {

  estudantes: Estudantes[] = [];

  constructor (private EstudantesService: EstudantesService) {}

  ngOnInit(): void {
    this.loadEstudantes();
  }
  loadEstudantes() {
    this.EstudantesService.getEstudantes().subscribe(
      {
        next : data => this.estudantes = data
      }
    );
  }

}
