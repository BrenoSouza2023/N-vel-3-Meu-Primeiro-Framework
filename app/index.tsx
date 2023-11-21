// pages/index.tsx

import Head from 'next/head';
import { Menu } from '../classes/componentes/Menu' 
const Home: React.FC = () => {
    return (
      <div className="container">
        <Head>
          <title>Loja Next</title>
        </Head>
  
        <Menu />
  
        <main>
          <h1>Página Inicial</h1>
        </main>
  
        <style jsx>{`
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
  
          main {
            margin-top: 50px;
          }
  
          h1 {
            text-align: center;
            color: #0070f3;
          }
        `}</style>
      </div>
    );
  };
  
  export default Home;
