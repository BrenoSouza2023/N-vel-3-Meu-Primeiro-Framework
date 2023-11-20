import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Menu } from '../componentes/Menu'; // Ajuste o caminho conforme a estrutura do seu projeto
import { LinhaLivro } from '../componentes/LinhaLivro'; // Importe o componente LinhaLivro
import styles from '../styles/Home.module.css';
import { Livro } from '../modelo/Livro';

const LivroLista: React.FC = () => {
  const baseURL = 'http://localhost:3000/api/livros';
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState(false);

  const obterLivros = async () => {
    try {
      const resposta = await fetch(baseURL);
      const dados = await resposta.json();
      setLivros(dados);
      setCarregado(true);
    } catch (erro) {
      console.error(erro);
    }
  };

  const excluirLivro = async (codigo: number) => {
    try {
      await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
      setCarregado(false);
    } catch (erro) {
      console.error(erro);
    }
  };

  useEffect(() => {
    obterLivros();
  }, [carregado]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Lista de Livros</title>
      </Head>

      <Menu />

      <main>
        <h1>Lista de Livros</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Título</th>
              <th>Editora</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={() => excluirLivro(livro.codigo)} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;