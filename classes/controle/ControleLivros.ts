import { Livro } from '../modelo/Livro'; 

const livros: Array<Livro> = [
    { codigo: 1, titulo: 'Use a Cabeça: Java', codEditora: 1, autores: ['Bert Bates', 'Kathy Sierra'], resumo: 'Use a Cabeça! Java é uma experiência de aprendizado em programação orientada a objetos(OO) e Java' },
    { codigo: 2, titulo: 'Java, como Programar', codEditora: 2, autores: ['Paul Deitel', 'Harvey Deitel'], resumo: 'Milhões de alunos e profissonais aprederam programação e desenvolvimento de software com os livros Deitel' },
    { codigo: 3, titulo: 'Core Java for the Impatient', codEditora: 3, autores: ['Addison Wesley'], resumo: 'eaders familiar with Horstmanns original, two-volume "Core Java" books who are looking for a comprehensive, but condensed guide to all of newfeatures and functions of Java SE 9 will learn how these new features impact the language and core libraries' },
  ];
  
export default class ControleLivros {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(novoLivro: Livro): void {
    const novoCodigo = livros.reduce((max, livro) => (livro.codigo > max ? livro.codigo : max), 0) + 1;
    novoLivro.codigo = novoCodigo;
    livros.push(novoLivro);
  }


  excluir(codigo: number): void {
    const index = livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}