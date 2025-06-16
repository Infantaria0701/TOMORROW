export class Disciplina {
    nome:string |null;
    descricao:string |null;
    id : number| null;
    
constructor (id:number|null, nome:string |null, descricao: string| null){   
           this.id =id;        
           this.nome=nome;
           this.descricao=descricao;
    }
}
