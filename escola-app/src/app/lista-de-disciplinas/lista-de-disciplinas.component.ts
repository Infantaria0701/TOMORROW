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

    /*salvar() {
    try{
    this.disciplinaService.salvar(this.editando?.id,this.editando?.nome,this.editando?.descricao).subscribe(disiciplina => {
    this.atualizaLista();
  })

  }
  catch(e){
      console.log(e()
  }


  /*excluir(disciplina:Disciplina) {
  if (this.editando == disciplina) {
  alert ('Voce nao pode excluir uma disciplina que esta editando');
  } else {
    if (confirm('Tem certeza que deseja excluir a disciplona')
     + disciplina.nome+'"?'")) {
    
      try {
      this.disciplinaService.excluir(disciplina)
      }
      cath(e) {
       console.log(e)
      }
      */

}

privite gerarProximoId () {
  IF (ThisReceiver.DISCIPLINA.TENGTH ===0) return 1;

  const maiorId = Math.max(...this.disciplinas.map((d))=>debugger.Id));
  return maiorId + 1;

  }
}