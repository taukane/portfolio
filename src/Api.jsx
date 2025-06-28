import React, { useState, useEffect } from 'react';

function Api() {
    const [dados, setProdutos] = useState([]);
    const [carregando, setLoading] = useState(true);
    const [erro, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL, {
                    cors: 'no-cors',
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Allow-Cross-Origin-Requests': 'true',
                        'Access-Control-Allow-Origin': '*'
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const dados = await response.json();
                console.log('API Response:', dados);
                setProdutos(dados.args);
            } catch (erro) {
                setError(erro.message);
                console.error('Fetch error:', erro);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
      <div>
        
        <h1>Lista Api / Portfolio</h1>
        {carregando && <p>Carregando produtos...</p>}
        {erro && <p>Erro ao carregar produtos: {erro.message}</p>}
        {!carregando && !erro && (
           <ul>
            {dados.products.map(produto => (
              <li key={produto.id}>
                <h2>{produto.name}</h2>
                <p>{produto.descricao || 'Sem descrição disponível'}</p>
                {produto.src && (
                    <img src={produto.src} alt={produto.name} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                    )}
                <p>Disponível: {produto.estoque > 0 ? 'Sim' : 'Não'}</p>
              </li>
            ))}
          </ul>
          
        )}
        <p>Total: {dados.products ? dados.products.length : 0}</p>
      </div>
    );
}
export default Api;