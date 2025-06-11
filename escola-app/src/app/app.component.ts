import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{ ListaDeDisciplinasComponent} from "./lista-de-disciplinas/lista-de-disciplinas.component"
import { CommonModule } from '@angular/common';
import { Disciplina } from './disciplina.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ListaDeDisciplinasComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selecionado: null | Disciplina = null

    disciplinas = [
      new Disciplina("Lingua Portuguesa", "Essa matéria fala portugues")
    ];
    
    selecionar (disciplina:Disciplina){
      this.selecionado=disciplina
    }

    
   
   

}
 


