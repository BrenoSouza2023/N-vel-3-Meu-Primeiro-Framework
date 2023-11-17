// Livro.ts

export class Livro {
    codigo: number;
    codEditora: number;
    titulo: string;
    resumo: string; // Adicionando a propriedade resumo
    autores: string[];
  
    constructor(codigo: number, codEditora: number, titulo: string, resumo: string, autores: string[]) {
      this.codigo = codigo;
      this.codEditora = codEditora;
      this.titulo = titulo;
      this.resumo = resumo; // Inicializando a propriedade resumo no construtor
      this.autores = autores;
    }
  }