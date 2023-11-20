import { NextApiRequest, NextApiResponse } from 'next';
import ControleEditora from '@/controle/ControleEditora'; // Substitua pelo caminho correto

// Definindo uma instância exportável de ControleEditora
export const controleEditora = new ControleEditora();

// Assinatura para tratamento das solicitações
export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Implementar o tratamento de requisições
    if (req.method === 'GET') {
      const editoras = controleEditora.getEditoras();
      res.status(200).json(editoras);
    } else {
      res.status(405).end(); // Método não permitido
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};