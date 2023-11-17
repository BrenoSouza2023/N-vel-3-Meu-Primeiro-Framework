import { Editora } from '../modelo/Editora';

const editoras: Array<Editora> = [
  new Editora(1, 'Alta Books'),
  new Editora(2, 'Pearson'),
  new Editora(3, 'Addison Wesley'),
];

export default class ControleEditora {
  getEditoras(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : undefined;
  }
}