import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from '@/controle/ControleEditora';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const { codEditora } = req.query;
      const codigoEditora = Number(codEditora);

      if (isNaN(codigoEditora)) {
        res.status(400).json({ error: 'Código de editora inválido.' });
        return;
      }

      const nomeEditora = controleEditora.getNomeEditora(codigoEditora);
      res.status(200).json({ nome: nomeEditora });
    } else {
      res.status(405).end(); 
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};
