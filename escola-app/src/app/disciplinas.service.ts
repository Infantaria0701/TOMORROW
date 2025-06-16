import { Injectable } from '@angular/core';
import { Disciplina } from './disciplina.model';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {
  private disciplinas: Array < Disciplina >| null = null
  private id: number= 2
  constructor() {
    this.disciplinas = [new Disciplina (1,"Lingua portuguesa","Essa materia fala portugues")]
   }
   todas ():Array<Disciplina>|null{
    return this.disciplinas;
   }
salvar (id:number|null,nome:string|null,descricao:string|null):Disciplina {

  if(id) {
    let editDisciplina = this.encontrar(id);
   if (editDisciplina){
     editDisciplina.nome = nome
 editDisciplina.descricao = descricao
 return editDisciplina
  }
    const createDisciplina= new Disciplina (this.id,nome,descricao)
    this.disciplinas?.push(createDisciplina) 
    this.id++;
    return createDisciplina}
  
  }

   excluir(disciplina: number|Disciplina){
    let isnumber = null
    
    if(typeof(disciplina)=== 'number') {
      isnumber = this.encontrar(disciplina)
    }
    else {
      isnumber= this.encontrar(disciplina.id)
    }
    if(isnumber!=null){
      const disciplina = this.disciplinas?.index0f(isnumber)
      this.disciplinas?.splice(disciplina,1)
    }
    else{
      console.log("Não foi possível encontrar a Disciplina")
    }
  }
  encontrar (params: number |string) {
  let isDisciplina = null

 if(typeof(params) === "number"){
 isDisciplina = this.disciplinas.
 
 }

  }
    
   

}
