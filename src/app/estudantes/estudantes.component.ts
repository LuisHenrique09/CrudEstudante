import { Estudantes } from './../Estudantes';
import { Component } from '@angular/core';
import { EstudantesService } from '../estudantes.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent {

  estudantes: Estudantes[] = [];

  isEditing : boolean = false;

  formGroupClient : FormGroup;

  constructor (private EstudantesService: EstudantesService,
    private formBuilder: FormBuilder
    
    ) {
      this.formGroupClient = formBuilder.group({
        id : [''],
        nome : [''],
        email : [''],
        telefone : [''],
        endereco : ['']
      });
    }

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

  save() {
    if(this.isEditing)
    {
      this.EstudantesService.edit(this.formGroupClient.value).subscribe(
        {
          next: () => {
            this.loadEstudantes();
            this.formGroupClient.reset
            this.isEditing = false;
          }
        }
      )
    }
    else{
      this.EstudantesService.save(this.formGroupClient.value).subscribe(
        {
          next: data => {
            this.estudantes.push(data)
            this.formGroupClient.reset();
          }
        }
        );
    }


    
  }

  delete(estudantes: Estudantes){
    this.EstudantesService.delete(estudantes).subscribe({
      next: () => this.loadEstudantes()
    })
  }

  edit(estudantes: Estudantes){
    this.formGroupClient.setValue(estudantes);
    this.isEditing = true;
  }

}
