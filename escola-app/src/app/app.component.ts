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
  nome : string | null = "";
  editando : Disciplina | null = null;

}
    disciplinas = [new Disciplina ("Lingua Portuguesa","Essa matéria fala português")];
      
    
    selecionar (disciplina:Disciplina){
      this.selecionado=disciplina
    }
    
     
    Salvar (disciplina: Disciplina) {
       if (this.editando) {
           this.editando.nome=Disciplina.nome
           this.editando.descricao = Disciplina.descricao; 
       } else {
          this   

       }

    }
    
   
   

}
 


