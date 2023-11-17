// ControleLivros.ts

import { Livro } from '../modelo/Livro'; // Substitua pelo caminho real do seu arquivo Livro

// b) Definir a variável livros, como Array<Livro>, contendo ao menos três elementos, no formato JSON
const livros: Array<Livro> = [
    { codigo: 1, titulo: 'Use a Cabeça: Java', codEditora: 1, autores: ['Bert Bates', 'Kathy Sierra'], resumo: 'Use a Cabeça! Java é uma experiência de aprendizado em programação orientada a objetos(OO) e Java' },
    { codigo: 2, titulo: 'Java, como Programar', codEditora: 2, autores: ['Paul Deitel', 'Harvey Deitel'], resumo: 'Milhões de alunos e profissonais aprederam programação e desenvolvimento de software com os livros Deitel' },
    { codigo: 3, titulo: 'Core Java for the Impatient', codEditora: 3, autores: ['Addison Wesley'], resumo: 'eaders familiar with Horstmanns original, two-volume "Core Java" books who are looking for a comprehensive, but condensed guide to all of newfeatures and functions of Java SE 9 will learn how these new features impact the language and core libraries' },
  ];
  
// c) Criar a classe ControleLivro, contendo os métodos obterLivros, incluir e excluir
export default class ControleLivros {
  // d) Implementar o método obterLivros, com o retorno do vetor livros
  obterLivros(): Array<Livro> {
    return livros;
  }

  // e) Implementar o método incluir, recebendo um objeto do tipo Livro,
  // que terá o código trocado pelo código mais alto do vetor, incrementado de um,
  // e depois será adicionado ao vetor
  incluir(novoLivro: Livro): void {
    const novoCodigo = livros.reduce((max, livro) => (livro.codigo > max ? livro.codigo : max), 0) + 1;
    novoLivro.codigo = novoCodigo;
    livros.push(novoLivro);
  }

  // f) Implementar o método excluir, recebendo um código numérico,
  // que irá encontrar o índice do livro com o código fornecido, através de findIndex,
  // e removê-lo com o uso de splice
  excluir(codigo: number): void {
    const index = livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}